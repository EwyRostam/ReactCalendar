using Backend.Models;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class EmotionsController : ControllerBase
    {

        private static List<Emotion> Emotions = [];


        [HttpPost]
        public IActionResult CreateEmotion(Emotion emotion)
        {
            if (!Emotions.Any(feeling => feeling.Content == emotion.Opposite.Content))
            {
                var oppositeEmotion = new Emotion()
                {
                    Content = emotion.Opposite.Content,
                    Value = emotion.Value > 0 ? -1 : 1,
                    OppositeId = emotion.Id,
                    Opposite = emotion,
                };
                Emotions.Add(oppositeEmotion);
            }
            Emotions.Add(emotion);
            return Ok();
        }
    }
}