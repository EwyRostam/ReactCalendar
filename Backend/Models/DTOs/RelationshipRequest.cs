using Backend.Models.Enteties;

namespace Backend.Models.DTOs
{
    public record RelationshipRequest
    (
        string Name,
        List<string> WantedEmotions
    );

}