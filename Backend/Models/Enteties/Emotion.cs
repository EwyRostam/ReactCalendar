namespace Backend.Models.Enteties
{
    public class Emotion
    {
        public int Id { get; set;}
        public required string Content { get; set; }
        public int Value { get; set; }
        public required string Opposite { get; set; }
        public ICollection<Day>? Days { get; set; }
        public ICollection<Relationship>? Relationships { get; set; }

    }
}