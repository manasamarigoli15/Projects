using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Library.Data.Entities
{
    public class BookRentalsSummary
    {
        public int BookId { get; set; }
        public string Title { get; set; }
        public float Revenue { get; set; }
        public int NumberOfCopiesReturned { get; set; }
    }
}
