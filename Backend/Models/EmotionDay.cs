namespace Backend.Models
{
    public class EmotionDay
    {
        public int EmotionId { get; set; }
        public required Emotion Emotion { get; set; }
        public int DayId { get; set; }
        public required Day Day { get; set; }
    }
}