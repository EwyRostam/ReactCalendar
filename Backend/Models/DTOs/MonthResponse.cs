namespace Backend.Models.DTOs
{
    public record MonthResponse
    (
        int MonthIndex,
        List<DayResponse> DaysInMonth
    );
}