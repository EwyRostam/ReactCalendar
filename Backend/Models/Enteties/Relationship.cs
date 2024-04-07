namespace Backend.Models.Enteties
{
    public class Relationship
    {
        public int Id { get; set; }
        public required ICollection<Day> Days {get; set;}
        public required ICollection<Emotion> WantedEmotions {get; set;}
    }
}