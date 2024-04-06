using System.Collections.Generic;
using Backend.Models;
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

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Day>()
                .HasMany(e => e.Emotions)
                .WithMany(e => e.Days)
                .UsingEntity(
                    "PostTag",
                    l => l.HasOne(typeof(Emotion)).WithMany().HasForeignKey("EmotionsId").HasPrincipalKey(nameof(Emotion.Id)),
                    r => r.HasOne(typeof(Day)).WithMany().HasForeignKey("DaysId").HasPrincipalKey(nameof(Day.Id)),
                    j => j.HasKey("DaysId", "EmotionsId"));
        }
    }


}