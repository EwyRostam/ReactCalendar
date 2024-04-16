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
    public class RelationshipsController : ControllerBase
    {
        private readonly RelationshipService _service;

        public RelationshipsController(RelationshipService service)
        {
            _service = service;
        }

        [HttpPost]
        public async Task<ActionResult<Relationship>> CreateRelationship(RelationshipRequest relationshipReq)
        {
            var relationship = await _service.CreateRelationshipAsync(relationshipReq);
            return relationship == null ? BadRequest() : CreatedAtAction(nameof(GetRelationship), new { id = relationship.Id }, relationship);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<RelationshipResponse>> GetRelationship(int id)
        {
            var relationship = await _service.GetRelationshipResponseAsync(id);
            return relationship == null ? BadRequest() : relationship;
        }


        [HttpGet]
        public async Task<ActionResult<IEnumerable<Relationship>>> GetAllRelationships()
        {
            return Ok(await _service.GetAllRelationshipsAsync());
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRelationship(int id)
        {
            await _service.DeleteRelationshipAsync(id);
            return NoContent();
        }
    }
}