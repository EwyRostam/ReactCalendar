using Backend.Models.DTOs;
using Backend.Models.Enteties;
using Backend.Services;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class EmotionsController : ControllerBase
    {
        private readonly EmotionService _service;

        public EmotionsController(EmotionService service)
        {
            _service = service;
        }

        [HttpPost]
        public async Task<ActionResult<Emotion>> CreateEmotion(EmotionRequest emotionReq)
        {
            if (await _service.EmotionExistsAsync(emotionReq))
            {
                return BadRequest();
            }

            return await _service.CreateEmotionAsync(emotionReq);


        }

        [HttpGet("{content}")]
        public async Task<ActionResult<Emotion>> GetEmotion(string content)
        {
            var emotion = await _service.GetEmotionAsync(content);
            return emotion == null ? BadRequest() : emotion;
        }


        [HttpGet]
        public async Task<ActionResult<IEnumerable<Emotion>>> GetAllEmotions()
        {
            return Ok(await _service.GetAllEmotionsAsync());
        }
    }
}