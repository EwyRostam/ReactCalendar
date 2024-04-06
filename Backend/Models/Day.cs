namespace Backend.Models
{
    public class Day
    {
        public int Id { get; set;}
        public DateTime Date { get; set;}
        public int Score { get; set;}
        public List<Emotion>? Emotions { get; set;}
    }
}