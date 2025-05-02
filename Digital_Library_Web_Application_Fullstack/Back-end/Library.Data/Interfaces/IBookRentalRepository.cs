using Library.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Library.Data.Interfaces
{
    public interface IBookRentalRepository : IRepository<BookRental>
    {
        List<BookRental> GetByUser(int userId);
        List<BookRental> GetByBook(int bookId);
        List<BookRental> GetPassedDueDate();
        List<BookRental> GetCurrentlyRented();
        //float CalculateMonthlyRevenue(int year, int month);
    }
}
