using System.Linq.Expressions;
using Backend.Data;
using Backend.Models.Enteties;
using Microsoft.EntityFrameworkCore;

namespace Backend.Repositories
{
    public class Repositories
    {

        public class DayRepo : Repo<Day>
        {
            private AppDBContext _context;

            public DayRepo(AppDBContext context) : base(context)
            {
                _context = context;
            }

            public override async Task<IEnumerable<Day>> GetAllAsync()
            {
                return await _context.Days
                .Include(day => day.Relationship)
                .Include(day => day.Emotions)
                .ToListAsync();
            }

            public override async Task<Day> GetSpecificAsync(Expression<Func<Day, bool>> predicate)
            {
                return await _context.Days
                .Include(day => day.Relationship)
                .Include(day => day.Emotions)
                .FirstOrDefaultAsync(predicate) ?? null!;
                
            }
        }
        
    }
}