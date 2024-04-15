namespace Backend.Models.DTOs
{
    public record EmotionDTO
    (
        string Content,
        string Opposite,
        int Value
    );
}