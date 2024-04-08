using Backend.Data;
using Backend.Models.DTOs;
using Backend.Models.Enteties;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

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
        public async Task<ActionResult<Emotion>> CreateEmotion(EmotionRequest emotionReq)
        {
            if(await _context.Emotions.AnyAsync(feeling => feeling.Content == emotionReq.Content))
            {
                return BadRequest();
            }
            
            var oppositeEmotion = await _context.Emotions.FirstOrDefaultAsync(feeling => feeling.Content == emotionReq.Opposite);

            Emotion emotion = new Emotion()
            {
                Content = emotionReq.Content,
                Value = emotionReq.Value,
                Opposite = ""
            };

            if (oppositeEmotion == null)
            {
                oppositeEmotion = new Emotion()
                {
                    Content = emotionReq.Opposite,
                    Value = emotionReq.Value > 0 ? -1 : 1,
                    Opposite = emotion.Content,
                };
                await _context.Emotions.AddAsync(oppositeEmotion);
            }
            emotion.Opposite = oppositeEmotion.Content;


            await _context.Emotions.AddAsync(emotion);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetEmotion), new { id = emotion.Id }, emotion);

        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Emotion>> GetEmotion(int id)
        {
            var feeling = await _context.Emotions.FirstOrDefaultAsync(feeling => feeling.Id == id);
            return feeling == null ? NoContent() : feeling;
        }


        [HttpGet]
        public async Task<ActionResult<IEnumerable<Emotion>>> GetAllEmotions()
        {
           return await _context.Emotions.ToListAsync();
        }
    }
}