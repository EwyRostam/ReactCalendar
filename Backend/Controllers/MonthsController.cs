using Backend.Data;
using Backend.Models.Enteties;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MonthsController : ControllerBase
    {
        private AppDBContext _context;

        public MonthsController(AppDBContext context)
        {
            _context = context;
        }

        [HttpGet("{monthIndex}")]
        public async Task<ActionResult<Month>> GetMonth(int monthIndex)
        {
            var monthToReturn = await _context.Months
            .Include(m => m.DaysInMonth)
            .FirstOrDefaultAsync(month => month.MonthIndex == monthIndex);

           return monthToReturn == null ? BadRequest() : monthToReturn;
        }
    }
}