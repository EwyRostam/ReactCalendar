using Backend.Models.DTOs;
using Backend.Models.Enteties;
using static Backend.Repositories.Repositories;

namespace Backend.Services
{
    public class RelationshipService
    {
        private readonly RelationshipRepo _repo;
        private readonly EmotionService _emotionService;

        public RelationshipService(RelationshipRepo repo, EmotionService emotionService)
        {
            _repo = repo;
            _emotionService = emotionService;
        }

        public async Task<Relationship> CreateRelationshipAsync(RelationshipRequest relationshipReq)
        {
            if (await _repo.ExistsAsync(rel => rel.Name == relationshipReq.Name))
            {
                return null!;
            }

            var wantedEmotions = new List<Emotion>();

            foreach (var emotion in relationshipReq.WantedEmotions)
            {
                var emotionToAdd = await _emotionService.GetEmotionAsync(emotion.Content);
                if (emotionToAdd != null)
                {
                    wantedEmotions.Add(emotionToAdd);
                }
            }

            var relationship = new Relationship()
            {
                Name = relationshipReq.Name,
                Category = relationshipReq.Category,
                WantedEmotions = wantedEmotions
            };

            return relationship;
        }

        public async Task<Relationship> GetRelationshipAsync(int id)
        {
            return await _repo.GetSpecificAsync(rel => rel.Id == id);
        }

        public async Task<IEnumerable<Relationship>> GetAllRelationshipsAsync()
        {
            return await _repo.GetAllAsync();
        }

        public async Task DeleteRelationshipAsync(int id)
        {
            if(await _repo.ExistsAsync(rel => rel.Id == id))
            {
                await _repo.DeleteAsync(rel => rel.Id == id);
            }
        }
    }
}