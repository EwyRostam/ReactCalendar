using Backend.Data;
using Backend.Models.DTOs;
using Backend.Models.Enteties;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Backend.Controllers
{
    [ApiController]
    [Route("[controller]")]

    public class DaysController : ControllerBase
    {

        private readonly AppDBContext _context;

        public DaysController(AppDBContext context)
        {
            _context = context;
        }

        [HttpPost]
        public async Task<ActionResult<Day>> CreateDay(DayRequest dayReq)
        {
            var score = 0;
            dayReq.Emotions.ForEach(feeling => score += feeling.Value);

            var allEmotions = await _context.Emotions.ToListAsync();
            
            var emotions = new List<Emotion>();
            dayReq.Emotions.ForEach(feeling => emotions.Add(
                allEmotions.First(e =>
                e.Content == feeling.Content)
            ));

            var dayToAdd = new Day()
            {
                Date = dayReq.Date,
                Emotions = emotions,
                Score = score
            };

            await _context.AddAsync(dayToAdd);
            await _context.SaveChangesAsync();
            return dayToAdd;
        }
    }
}
