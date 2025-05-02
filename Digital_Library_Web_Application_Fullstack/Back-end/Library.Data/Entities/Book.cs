
using System.ComponentModel.DataAnnotations;


namespace Library.Data.Entities
{
    public enum Genre
    {
        Mystery = 1,
        Thriller,
        Horror,
        Fantasy,
        ScienceFiction
    }
    public class Book : BaseObject
    {
        [Required]
        [StringLength(100, MinimumLength = 1)]
        public string Title { get; set; }

        [Required]
        [StringLength(50, MinimumLength = 3)]
        public string Author { get; set; }

        [Required]
        public Genre Genre { get; set; }

        [Required]
        public int RentPerDay { get; set; }

        [Required]
        public int TotalNumberOfCopies { get; set; }

        [Required]
        public int NumberOfCopiesAvailable { get; set; }

        [Required]
        public int NumberOfCopiesRentedOut { get; set; }

        public string ImageUrl { get; set; }
    }
}
