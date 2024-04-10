using Backend.Models.DTOs;

namespace Backend.Models.Enteties
{
    public class Relationship
    {
        public int Id { get; set;}
        public string CreatedAt = DateOnly.FromDateTime(DateTime.Now).ToString();
        public required string Name { get; set;}
        public string? Category {get; set;}
        public ICollection<Day> Days { get;} = [];
        public ICollection<Month> Months {get;} = [];
        public required ICollection<Emotion> WantedEmotions { get; set; }
    }
}