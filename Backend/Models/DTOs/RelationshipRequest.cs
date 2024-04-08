using Backend.Models.Enteties;

namespace Backend.Models.DTOs
{
    public class RelationshipRequest
    {
        public required string Name {get; set;}
        public required List<EmotionRequest> WantedEmotions {get; set;}
    }
}