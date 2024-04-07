using Backend.Models;
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
        public IActionResult CreateEmotion(EmotionRequest emotionReq)
        {
            var oppositeEmotion = Emotions.FirstOrDefault(feeling => feeling.Content == emotionReq.Opposite);

            Emotion emotion = new Emotion()
            {
                Content = emotionReq.Content,
                Value = emotionReq.Value,
                Opposite = oppositeEmotion!
            };

            if (oppositeEmotion == null)
            {
                oppositeEmotion = new Emotion()
                {
                    Content = emotionReq.Opposite,
                    Value = emotionReq.Value > 0 ? -1 : 1,
                    Opposite = emotion,
                };
                Emotions.Add(oppositeEmotion);
            }


            Emotions.Add(emotion);
            return Ok();
        }
    }
}