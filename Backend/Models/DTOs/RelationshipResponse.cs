namespace Backend.Models.DTOs
{
    public record RelationshipResponse
    (
        int Id,
        string CreatedAt,
        string Name,
        string? Category,
        List<MonthResponse> Months,
        List<EmotionDTO> WantedEmotions
    );
}