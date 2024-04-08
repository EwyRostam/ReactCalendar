namespace Backend.Models.Enteties
{
    public class DayEmotion
    {
        public required string DayId {get; set;}
        public required Day Day {get; set;}
        public required string EmotionId {get; set;}
        public required Emotion Emotion {get; set;}
    }
}