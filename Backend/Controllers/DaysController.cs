using Backend.Data;
using Backend.Models.Enteties;
using Microsoft.AspNetCore.Mvc;

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
        public async Task<ActionResult<Day>> CreateDay()
        {
            return NoContent();
        }
    }
}
