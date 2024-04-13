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

        public async Task<Month> CreateMonthAsync(Month month)
        {
            return await _repo.CreateAsync(month);
        }

        public async Task<Month> GetMonthAsync(int monthIndex)
        {
            return await _repo.GetSpecificAsync(month => month.MonthIndex == monthIndex);
        }
    }
}