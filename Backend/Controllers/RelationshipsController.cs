using Backend.Data;
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
        public async Task<ActionResult<Relationship>> CreateRelationship(Relationship relationship)
        {
            if(await _context.Relationships.AnyAsync(rel => rel.Name == relationship.Name))
            {
                return BadRequest();
            }

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
    }
}