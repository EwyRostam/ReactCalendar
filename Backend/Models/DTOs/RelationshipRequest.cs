using Backend.Models.Enteties;

namespace Backend.Models.DTOs
{
    public record RelationshipRequest
    (
        string Name,
        string Category,
        List<EmotionRequest> WantedEmotions
    );

}