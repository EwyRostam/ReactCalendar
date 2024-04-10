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
                Month = dayReq.Month,
                Emotions = emotions,
                Score = score
            };
            var month = await _context.Months
            .Include(m => m.DaysInMonth)
            .FirstOrDefaultAsync(m =>
            m.MonthIndex == dayToAdd.Month);


            if (month == null)
            {
                month = new Month()
                {
                    MonthIndex = dayToAdd.Month
                };
                await _context.Months.AddAsync(month);
            }


            month.DaysInMonth.Add(dayToAdd);

            await _context.Days.AddAsync(dayToAdd);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetDay), new { id = dayToAdd.Id }, dayToAdd);
        }

        [HttpGet("{date}/{month}")]
        public async Task<ActionResult<Day>> GetDay(int date, int month)
        {
            var response = await _context.Days
            .Include(day => day.Emotions)
            .FirstOrDefaultAsync(e => e.Date == date && e.Month == month);

            if (response == null)
            {
                return BadRequest();
            }

            return Ok(response);
        }

        [HttpGet]
        public async Task<ActionResult<List<Day>>> GetAllDays()
        {
            return await _context.Days.Include(day => day.Emotions).ToListAsync();
        }
    }
}
