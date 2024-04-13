using Backend.Models.DTOs;
using Backend.Models.Enteties;
using static Backend.Repositories.Repositories;

namespace Backend.Services
{
    public class EmotionService
    {
        private readonly EmotionRepo _repo;

        public EmotionService(EmotionRepo repo)
        {
            _repo = repo;
        }

        public async Task<Emotion> CreateEmotionAsync(EmotionRequest emotionReq)
        {
            
            var oppositeEmotion = await _repo.GetSpecificAsync(feeling => feeling.Content == emotionReq.Opposite);

            Emotion emotion = new Emotion()
            {
                Content = emotionReq.Content,
                Value = emotionReq.Value,
                Opposite = ""
            };

            if (oppositeEmotion == null)
            {
                oppositeEmotion = new Emotion()
                {
                    Content = emotionReq.Opposite,
                    Value = emotionReq.Value > 0 ? -1 : 1,
                    Opposite = emotion.Content,
                };
                await _repo.CreateAsync(oppositeEmotion);
            }
            emotion.Opposite = oppositeEmotion.Content;

            return emotion;
       
        }

        public async Task<Emotion> GetEmotionAsync(int id)
        {
            return await _repo.GetSpecificAsync(emotion => emotion.Id == id) ?? null!;
        }

        public async Task<IEnumerable<Emotion>> GetAllEmotionAsync()
        {
            return await _repo.GetAllAsync();
        }

        public async Task<bool> EmotionExistsAsync(EmotionRequest emotionReq)
        {
            return await _repo.ExistsAsync(feeling => feeling.Content == emotionReq.Content);
        }
    }
}