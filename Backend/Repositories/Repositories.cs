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

        public class EmotionRepo : Repo<Emotion>
        {
            private AppDBContext _context;

            public EmotionRepo(AppDBContext context) : base(context)
            {
                _context = context;
            }

            public override async Task<IEnumerable<Emotion>> GetAllAsync()
            {
                return await _context.Emotions
                .Include(emotion => emotion.Relationships)
                .Include(emotion => emotion.Days)
                .ToListAsync();
            }

            public override async Task<Emotion> GetSpecificAsync(Expression<Func<Emotion, bool>> predicate)
            {
                return await _context.Emotions
                .Include(emotion => emotion.Relationships)
                .Include(emotion => emotion.Days)
                .FirstOrDefaultAsync(predicate) ?? null!;
                
            }
        }

        public class MonthRepo : Repo<Month>
        {
            private AppDBContext _context;

            public MonthRepo(AppDBContext context) : base(context)
            {
                _context = context;
            }

            public override async Task<IEnumerable<Month>> GetAllAsync()
            {
                return await _context.Months
                .Include(emotion => emotion.DaysInMonth)
                .ToListAsync();
            }

            public override async Task<Month> GetSpecificAsync(Expression<Func<Month, bool>> predicate)
            {
                return await _context.Months
                .Include(emotion => emotion.DaysInMonth)
                .FirstOrDefaultAsync(predicate) ?? null!;
                
            }
        }
        
    }
}