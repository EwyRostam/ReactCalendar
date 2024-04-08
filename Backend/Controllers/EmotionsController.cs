using Backend.Models.DTOs;
using Backend.Models.Enteties;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class EmotionsController : ControllerBase
    {

        private static List<Emotion> Emotions = [];


        [HttpPost]
        public ActionResult<Emotion> CreateEmotion(EmotionRequest emotionReq)
        {
            if(Emotions.Any(feeling => feeling.Content == emotionReq.Content))
            {
                return BadRequest();
            }
            
            var oppositeEmotion = Emotions.FirstOrDefault(feeling => feeling.Content == emotionReq.Opposite);

            Emotion emotion = new Emotion()
            {
                Content = emotionReq.Content,
                Value = emotionReq.Value,
                Opposite = oppositeEmotion!.Content
            };

            if (oppositeEmotion == null)
            {
                oppositeEmotion = new Emotion()
                {
                    Content = emotionReq.Opposite,
                    Value = emotionReq.Value > 0 ? -1 : 1,
                    Opposite = emotion.Content,
                };
                Emotions.Add(oppositeEmotion);
            }


            Emotions.Add(emotion);
            return CreatedAtAction(nameof(GetEmotion), new { id = emotion.Id }, emotion);

        }

        [HttpGet("{id}")]
        public ActionResult<Emotion> GetEmotion(int id)
        {
            var feeling = Emotions.FirstOrDefault(feeling => feeling.Id == id);
            return feeling == null ? NoContent() : feeling;
        }
    }
}