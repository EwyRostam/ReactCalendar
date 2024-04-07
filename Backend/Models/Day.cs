namespace Backend.Models
{
    public class Day
    {
        public int Id { get; set; }
        public DateTime Date { get; set; }
        public int Score { get; set; }
        public int RelationshipId { get; set; }
        public required Relationship Relationship {get; set;}
        public required ICollection<Emotion> Emotions {get; set;}

    }
}