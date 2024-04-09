using Backend.Models.Enteties;

namespace Backend.Models.DTOs
{
    public record DayRequest
    (
        DateTime Date, 
        List<EmotionRequest> Emotions
    );
   
}