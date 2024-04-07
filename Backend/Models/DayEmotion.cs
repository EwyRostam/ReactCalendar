namespace Backend.Models
{
    public class DayEmotion
    {
        public int DayId {get; set;}
        public Day? Day {get; set;}

        public int EmotionId {get; set;}
        public Emotion? Emotion {get; set;}
    }
}