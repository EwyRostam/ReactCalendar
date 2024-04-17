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
        public async Task<ActionResult<Emotion>> CreateEmotion(EmotionDTO emotionReq)
        {
            if (await _service.EmotionExistsAsync(emotionReq))
            {
                return BadRequest();
            }

            var emotion = await _service.CreateEmotionAsync(emotionReq);

            return CreatedAtAction(nameof(GetEmotion), new {content = emotion.Content}, emotion);


        }

        [HttpGet("{content}")]
        public async Task<ActionResult<EmotionDTO>> GetEmotion(string content)
        {
            var emotion = await _service.GetEmotionReqAsync(content);
            return emotion == null ? BadRequest() : emotion;
        }


        [HttpGet]
        public async Task<ActionResult<IEnumerable<EmotionDTO>>> GetAllEmotions()
        {
            return Ok(await _service.GetAllEmotionReqsAsync());
        }
    }
}