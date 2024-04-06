namespace Backend.Models
{
    public class Relationship
    {
        public int Id { get; set; }
        public List<Day> Days {get;} = [];
    }
}