namespace Backend.Models
{
    public class DayEmotion
    {
        public int DayId {get; set;}
        public required Day Day {get; set;}
        public int EmotionId {get; set;}
        public required Emotion Emotion {get; set;}
    }
}