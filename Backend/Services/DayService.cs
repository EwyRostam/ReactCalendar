
using Backend.Models.DTOs;
using Backend.Models.Enteties;
using static Backend.Repositories.Repositories;

namespace Backend.Services
{
    public class DayService
    {
        private readonly DayRepo _repo;

        public DayService(DayRepo repo)
        {
            _repo = repo;
        }

        public async Task<Day> CreateDayAsync(DayRequest dayReq)
        {
            var score = 0;
            dayReq.Emotions!.ForEach(feeling => score += feeling.Value);

            var allEmotions = await EmotionService.GetAllAsync();

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
            var month = await MonthService.GetSpecificAsyn(dayToAdd.Month);


            if (month == null)
            {
                month = new Month()
                {
                    MonthIndex = dayToAdd.Month
                };
                await MonthService.CreateMonthAsync(month);
            }


            month.DaysInMonth.Add(dayToAdd);

            return dayToAdd;
        }

        public async Task<Day> GetDayAsync(int date, int month)
        {
             var response = await _repo.GetSpecificAsync(date, month);

            if (response == null)
            {
                return new Day(){
                    Emotions = []
                };
            }

            return response;
        }

        public async Task<IEnumerable<Day>> GetAllDaysAsync()
        {
            return await _repo.GetAllAsync();
        }
    }
}