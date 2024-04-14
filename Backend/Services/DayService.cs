
using Backend.Models.DTOs;
using Backend.Models.Enteties;
using static Backend.Repositories.Repositories;

namespace Backend.Services
{
    public class DayService
    {
        private readonly DayRepo _repo;
        private readonly EmotionService _emotionService;
        private readonly MonthService _monthService;

        public DayService(DayRepo repo, EmotionService emotionService, MonthService monthService)
        {
            _repo = repo;
            _emotionService = emotionService;
            _monthService = monthService;
        }

        public async Task<Day> CreateDayAsync(DayRequest dayReq)
        {
            var score = 0;
            dayReq.Emotions!.ForEach(feeling => score += feeling.Value);

            var allEmotions = await _emotionService.GetAllEmotionsAsync();

            var emotions = new List<Emotion>();
            dayReq.Emotions.ForEach(feeling => emotions.Add(
                allEmotions.First(e =>
                e.Content == feeling.Content)
            ));

            var dayToAdd = new Day()
            {
                Date = dayReq.Date,
                Month = dayReq.Month,
                Emotions = emotions,
                Score = score
            };
            var month = await _monthService.GetMonthAsync(dayToAdd.Month);


            if (month == null)
            {
                month = new Month()
                {
                    MonthIndex = dayToAdd.Month
                };
                await _monthService.CreateMonthAsync(month);
            }


            month.DaysInMonth.Add(dayToAdd);

            return dayToAdd;
        }

        public async Task<Day> GetDayAsync(int date, int month)
        {
            var response = await _repo.GetSpecificAsync(day => day.Date == date && day.Month == month);

            if (response == null)
            {
                return new Day()
                {
                    Emotions = []
                };
            }

            return response;
        }

        public async Task<DayResponse> GetDayResAsync(int date, int month)
        {
            var day = await GetDayAsync(date, month);
            var emotionReqList = new List<EmotionRequest>();

            foreach (var e in day.Emotions)
            {
                emotionReqList.Add(new EmotionRequest(e.Content, e.Opposite, e.Value));
            }

            return new DayResponse(day.Date, day.Month, day.Score, day.Content, emotionReqList);
        }

        public async Task<IEnumerable<Day>> GetAllDaysAsync()
        {
            return await _repo.GetAllAsync();
        }

        public async Task<IEnumerable<DayResponse>> GetAllDayResponsesAsync()
        {
            var dayList = await GetAllDaysAsync();
            var dayResList = new List<DayResponse>();

            foreach (var day in dayList)
            {
                dayResList.Add(await GetDayResAsync(day.Date, day.Month));
            }
            return dayResList;
        }
    }
}