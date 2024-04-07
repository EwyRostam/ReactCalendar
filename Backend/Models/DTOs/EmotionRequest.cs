namespace Backend.Models.DTOs
{
    public record EmotionRequest
    (
    string Content,
    string Opposite,
    int Value
    );
}