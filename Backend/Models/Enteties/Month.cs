using System.ComponentModel.DataAnnotations;


namespace Backend.Models.Enteties
{
    public class Month
    {
        [Key]
        public int MonthIndex {get; set;}
        public required ICollection<Day> DaysInMonth {get; set;}
    }
}