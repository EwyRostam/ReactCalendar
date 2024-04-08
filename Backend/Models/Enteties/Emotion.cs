namespace Backend.Models.Enteties
{
    public class Emotion
    {
        public string Id { get; } = new Guid().ToString();
        public required string Content { get; set; }
        public int Value { get; set; }
        public int OppositeId { get; set; }
        public required Emotion Opposite { get; set; }
        public ICollection<Day>? Days { get; set; }
        public ICollection<Relationship>? Relationships { get; set; }

    }
}