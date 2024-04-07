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
            Emotions.Add(emotion);
            return Ok();
        }
    }
}