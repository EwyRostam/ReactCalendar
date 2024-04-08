namespace Backend.Models.Enteties
{
    public class Relationship
    {
        public string Id { get; } = new Guid().ToString();
        public required ICollection<Day> Days { get; set; }
        public required ICollection<Emotion> WantedEmotions { get; set; }
    }
}