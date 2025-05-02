using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Library.Data.Entities
{
    public class UserRental : BaseObject
    {
        public BookRental bookRentalList {  get; set; }
    }
}
