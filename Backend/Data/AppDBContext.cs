using Backend.Models;
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

        // protected override void OnModelCreating(ModelBuilder modelBuilder)
        // {
        //     modelBuilder.Entity<Day>()
        //         .HasOne(d => d.Relationship)
        //         .WithMany(r => r.Days)
        //         .HasForeignKey(d => d.RelationshipId);

        //     modelBuilder.Entity<Emotion>()
        //         .HasMany(e => e.Relationships)
        //         .WithMany(r => r.WantedEmotions);

        //     modelBuilder.Entity<DayEmotion>()
        //         .HasKey(de => new { de.DayId, de.EmotionId });

        //     modelBuilder.Entity<DayEmotion>()
        //         .HasOne(de => de.Day)
        //         .WithMany()
        //         .HasForeignKey(de => de.DayId);

        //     modelBuilder.Entity<DayEmotion>()
        //         .HasOne(de => de.Emotion)
        //         .WithMany()
        //         .HasForeignKey(de => de.EmotionId);

        // }
    }


}