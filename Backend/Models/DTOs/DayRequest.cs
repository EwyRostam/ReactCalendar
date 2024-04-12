using Backend.Models.Enteties;

namespace Backend.Models.DTOs
{
    public class DayRequest
    {
        public int Date { get; set; }
        public int Month { get; set; }
        public string? Content { get; set; }
        public List<EmotionRequest>? Emotions { get; set; }
    }

}