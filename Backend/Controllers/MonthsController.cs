using Backend.Data;
using Backend.Models.Enteties;
using Backend.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MonthsController : ControllerBase
    {
        private readonly MonthService _service;
        public MonthsController(MonthService service)
        {
            _service = service;
        }

        [HttpGet("{monthIndex}")]
        public async Task<ActionResult<Month>> GetMonth(int monthIndex)
        {
            var month = await _service.GetMonthAsync(monthIndex);
            return month == null ? BadRequest() : month;
        }

        [HttpPost]
        public async Task<ActionResult<Month>> CreateMonth(int monthIndex)
        {
            var month = await _service.GetMonthAsync(monthIndex);
            return month == null ? BadRequest() : month;
        }
    }
}