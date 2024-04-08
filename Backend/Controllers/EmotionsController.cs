using Backend.Data;
using Backend.Models.DTOs;
using Backend.Models.Enteties;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class EmotionsController : ControllerBase
    {
        private readonly AppDBContext _context;

        public EmotionsController(AppDBContext context)
        {
            _context = context;
        }

        [HttpPost]
        public ActionResult<Emotion> CreateEmotion(EmotionRequest emotionReq)
        {
            if(_context.Emotions.Any(feeling => feeling.Content == emotionReq.Content))
            {
                return BadRequest();
            }
            
            var oppositeEmotion = _context.Emotions.FirstOrDefault(feeling => feeling.Content == emotionReq.Opposite);

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
                _context.Emotions.Add(oppositeEmotion);
            }


            _context.Emotions.Add(emotion);
            return CreatedAtAction(nameof(GetEmotion), new { id = emotion.Id }, emotion);

        }

        [HttpGet("{id}")]
        public ActionResult<Emotion> GetEmotion(int id)
        {
            var feeling = _context.Emotions.FirstOrDefault(feeling => feeling.Id == id);
            return feeling == null ? NoContent() : feeling;
        }
    }
}