using Backend.Models.DTOs;
using Backend.Models.Enteties;
using Backend.Services;
using Microsoft.AspNetCore.Mvc;

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
        public async Task<ActionResult<DayResponse>> CreateDay(DayRequest dayReq)
        {
          var day = await _service.CreateDayAsync(dayReq);
          return day == null ? BadRequest() :
          CreatedAtAction(nameof(GetDay), new{date = day.Date, month = day.Month}, day);  
        }

        [HttpGet("{date}/{month}")]
        public async Task<ActionResult<DayResponse>> GetDay(int date, int month)
        {
            return await _service.GetDayResAsync(date, month);
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<DayResponse>>> GetAllDays()
        {
            return Ok(await _service.GetAllDayResponsesAsync());
        }

        [HttpDelete("{date}/{month}")]
        public async Task<IActionResult> DeleteDay(int date, int month)
        {
            return await _service.GetDayResAsync(date, month);
        }

    }
}
