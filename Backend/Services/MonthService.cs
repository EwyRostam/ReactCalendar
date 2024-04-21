using Backend.Models.Enteties;
using static Backend.Repositories.Repositories;

namespace Backend.Services
{
    public class MonthService
    {
        private readonly MonthRepo _repo;

        public MonthService(MonthRepo repo)
        {
            _repo = repo;
        }

        public async Task<Month> CreateMonthAsync(int monthIndex)
        {
            if(!await _repo.ExistsAsync(month => month.MonthIndex == monthIndex))
            {
                var month = new Month(){MonthIndex = monthIndex};
                return await _repo.CreateAsync(month);
            }
            return await GetMonthAsync(monthIndex);
        }

        public async Task<Month> GetMonthAsync(int monthIndex)
        {
            return await _repo.GetSpecificAsync(month => month.MonthIndex == monthIndex);
        }
    }
}