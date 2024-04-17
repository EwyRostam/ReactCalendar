namespace Backend.Models.DTOs
{
    public record DayResponse
    (
         int Date, 
         int Month,
         int Score,
         string? Content, 
         List<EmotionDTO>? Emotions
    );
    
        
    
}