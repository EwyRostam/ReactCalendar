namespace Backend.Models.Enteties
{
    public class Day
    {
        public int Id { get; set;} 
        public int Date { get; set; }
        public int Month { get; set; }
        public int Score { get; set; }
        public string? Content {get; set;}
        public Relationship? Relationship {get; set;}
        public required ICollection<Emotion> Emotions {get; set;}

    }
}