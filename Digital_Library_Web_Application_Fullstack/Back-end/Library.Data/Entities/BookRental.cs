using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Library.Data.Entities
{
    public class BookRental : BaseObject
    {
        public Book Book { get; set; }
        public User User { get; set; }

        [Required]
        public DateTime RentalDate { get; set; }
        public DateTime? DueDate { get; set; }
        public DateTime? ActualReturnDate { get; set; }
        public float? RentAmount { get; set; }
        public bool HasReturned { get; set; }
        public float? FineAmount { get; set; }

    }

}