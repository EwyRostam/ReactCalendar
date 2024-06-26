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

        public async Task<Emotion> CreateEmotionAsync(EmotionDTO emotionReq)
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

            return await _repo.CreateAsync(emotion);
        }

        public async Task<Emotion> GetEmotionAsync(string content)
        {
            return await _repo.GetSpecificAsync(emotion => emotion.Content == content) ?? null!;
        }

        public async Task<EmotionDTO> GetEmotionReqAsync(string content)
        {
            var emotion = await GetEmotionAsync(content);
            return new EmotionDTO(
               emotion.Content,
               emotion.Opposite,
               emotion.Value
            );

        }

        public async Task<IEnumerable<Emotion>> GetAllEmotionsAsync()
        {
            return await _repo.GetAllAsync();
        }

        public async Task<IEnumerable<EmotionDTO>> GetAllEmotionReqsAsync()
        {
            var returnList = new List<EmotionDTO>();

            var emotions = await GetAllEmotionsAsync();

            foreach (var emotion in emotions)
            {
                returnList.Add(new EmotionDTO(emotion.Content, emotion.Opposite, emotion.Value));
            }

            return returnList;
        }

        public async Task<bool> EmotionExistsAsync(EmotionDTO emotionReq)
        {
            return await _repo.ExistsAsync(feeling => feeling.Content == emotionReq.Content);
        }
    }
}