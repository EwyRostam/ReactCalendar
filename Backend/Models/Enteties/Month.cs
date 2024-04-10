using System.ComponentModel.DataAnnotations;


namespace Backend.Models.Enteties
{
    public class Month
    {
        public int Id {get; set;} 
        public int MonthIndex {get; set;}
        public List<Day> DaysInMonth {get;} = [];
    }
}