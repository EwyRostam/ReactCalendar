using Backend.Models.Enteties;
using Microsoft.EntityFrameworkCore;

namespace Backend.Data
{
    public class AppDBContext : DbContext
    {
        public AppDBContext(DbContextOptions<AppDBContext> options) : base(options)
        { }

        public DbSet<Day> Days { get; set; }
        public DbSet<Emotion> Emotions { get; set; }
        public DbSet<Relationship> Relationships { get; set; }

    }


}