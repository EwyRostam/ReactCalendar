using Backend.Models.DTOs;

namespace Backend.Models.Enteties
{
    public class Relationship
    {
        public int Id { get; set;}
        public required string Name { get; set;}
        public ICollection<Day> Days { get;} = [];
        public required ICollection<Emotion> WantedEmotions { get; set; }
    }
}