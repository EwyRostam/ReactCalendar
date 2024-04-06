namespace Backend.Models
{
    public class Emotion
    {
        public int Id { get; set; }
        public required string Content { get; set; }
        public int Value {get; set;}
        public bool IsWanted {get; set;}
        public int OppositeId { get; set; }
        public required Emotion Opposite { get; set; }
        public List<EmotionDay> EmotionDays {get;} = []; 
        public List<Day> Days {get;} = []; 

    }
} 