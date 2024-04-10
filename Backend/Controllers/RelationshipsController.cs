using Backend.Data;
using Backend.Models.DTOs;
using Backend.Models.Enteties;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class RelationshipsController : ControllerBase
    {
        private readonly AppDBContext _context;

        public RelationshipsController(AppDBContext context)
        {
            _context = context;
        }

        [HttpPost]
        public async Task<ActionResult<Relationship>> CreateRelationship(RelationshipRequest relationshipReq)
        {
            if (await _context.Relationships.AnyAsync(rel => rel.Name == relationshipReq.Name))
            {
                return BadRequest();
            }

            var wantedEmotions = new List<Emotion>();

            foreach (var emotion in relationshipReq.WantedEmotions)
            {
                var emotionToAdd = await _context.Emotions.FirstOrDefaultAsync(feeling => feeling.Content == emotion.Content);
                if (emotionToAdd != null)
                {
                    wantedEmotions.Add(emotionToAdd);
                }
            }

            var relationship = new Relationship()
            {
                Name = relationshipReq.Name,
                Category = relationshipReq.Category,
                WantedEmotions = wantedEmotions
            };

            await _context.Relationships.AddAsync(relationship);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetRelationship), new { id = relationship.Id }, relationship);

        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Relationship>> GetRelationship(int id)
        {
            var relationship = await _context.Relationships.FirstOrDefaultAsync(relationship => relationship.Id == id);
            return relationship == null ? NoContent() : relationship;
        }


        [HttpGet]
        public async Task<ActionResult<IEnumerable<Relationship>>> GetAllRelationships()
        {
            return await _context.Relationships.ToListAsync();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRelationship(int id)
        {
            var relationship = await _context.Relationships.FirstOrDefaultAsync(relationship => relationship.Id == id);
            if (relationship != null)
            {
                _context.Relationships.Remove(relationship);
                await _context.SaveChangesAsync();
            }
            return NoContent();
        }
    }
}