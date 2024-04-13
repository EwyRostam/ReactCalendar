using Backend.Models.Enteties;

namespace Backend.Models.DTOs
{
    public record DayRequest
    (
         int Date, 
         int Month,
         string? Content, 
         List<EmotionRequest>? Emotions
    );

}