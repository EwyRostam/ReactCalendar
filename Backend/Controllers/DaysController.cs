using Backend.Data;
using Backend.Models.DTOs;
using Backend.Models.Enteties;
using Backend.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Backend.Controllers
{
    [ApiController]
    [Route("[controller]")]

    public class DaysController : ControllerBase
    {

        private readonly DayService _service;

        public DaysController(DayService service)
        {
            _service = service;
        }

        [HttpPost]
        public async Task<ActionResult<Day>> CreateDay(DayRequest dayReq)
        {
          var day = await _service.CreateDayAsync(dayReq);
          return day == null ? BadRequest() : day;
        }

        [HttpGet("{date}/{month}")]
        public async Task<ActionResult<Day>> GetDay(int date, int month)
        {
            return await _service.GetDayAsync(date, month);
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Day>>> GetAllDays()
        {
            return Ok(await _service.GetAllDaysAsync());
        }
    
    }
}
