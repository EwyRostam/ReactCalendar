using Backend.Models.DTOs;
using Backend.Models.Enteties;
using static Backend.Repositories.Repositories;

namespace Backend.Services
{
    public class RelationshipService
    {
        private readonly RelationshipRepo _repo;
        private readonly EmotionService _emotionService;
        private readonly DayService _dayService;

        public RelationshipService(RelationshipRepo repo, EmotionService emotionService, DayService dayService)
        {
            _repo = repo;
            _emotionService = emotionService;
            _dayService = dayService;
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

            return await _repo.CreateAsync(relationship);
        }

        public async Task<Relationship> GetRelationshipAsync(int id)
        {
            return await _repo.GetSpecificAsync(rel => rel.Id == id);
        }

        public async Task<RelationshipResponse> GetRelationshipResponseAsync(int id)
        {
            var relationship = await _repo.GetSpecificAsync(rel => rel.Id == id);

            var days = await Task
              .WhenAll(relationship.Months
              .Select(m => m.DaysInMonth)
              .SelectMany(dayList => dayList)
              .Select(day => _dayService
                  .GetDayResAsync(day.Date, day.Month)));

            var dayList = new List<DayResponse>();
            foreach (var day in days)
            {
                dayList.Add(day);
            }

            var months = relationship.Months
            .Select(m =>
            new MonthResponse(m.MonthIndex, dayList)).ToList();

            var wantedEmotionsTask = await Task.WhenAll(relationship.WantedEmotions.Select(e => _emotionService
            .GetEmotionReqAsync(e.Content)));

            var wantedEmotions = new List<EmotionDTO>();
            foreach (var emotion in wantedEmotionsTask)
            {
                wantedEmotions.Add(emotion);
            }


            return new RelationshipResponse(
            relationship.Id,
            relationship.CreatedAt,
            relationship.Name,
            relationship.Category,
            months, wantedEmotions);
        }

        public async Task<IEnumerable<RelationshipResponse>> GetAllRelationshipsAsync()
        {
            var relationships = await _repo.GetAllAsync();
            var relResponses = new List<RelationshipResponse>();

            foreach (var rel in relationships)
            {
                // var days = new List<DayResponse>();
                var days = rel.Months
                .Select(m => m.DaysInMonth)
                .SelectMany(dayList => dayList)
                .Select(day => _dayService
                    .GetDayResAsync(day.Date, day.Month));

                var dayList = new List<DayResponse>();

                var gotDays = await Task.WhenAll(days);
                foreach (var day in gotDays)
                {
                    dayList.Add(day);
                }

                var months = rel.Months
                .Select(m =>
                new MonthResponse(m.MonthIndex, dayList)).ToList();

                var wantedEmotionsTask = await Task.WhenAll(rel.WantedEmotions.Select(e => _emotionService
                .GetEmotionReqAsync(e.Content)));

                var wantedEmotions = new List<EmotionDTO>();
                foreach (var emotion in wantedEmotionsTask)
                {
                    wantedEmotions.Add(emotion);
                }

                var relResponse = new RelationshipResponse(
                    rel.Id,
                    rel.CreatedAt,
                    rel.Name,
                    rel.Category,
                    months,
                    wantedEmotions
                    );
                relResponses.Add(relResponse);
            }

            return relResponses;
        }

        public async Task DeleteRelationshipAsync(int id)
        {
            if (await _repo.ExistsAsync(rel => rel.Id == id))
            {
                await _repo.DeleteAsync(rel => rel.Id == id);
            }
        }
    }
}