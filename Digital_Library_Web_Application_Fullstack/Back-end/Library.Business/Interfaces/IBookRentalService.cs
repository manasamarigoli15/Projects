using Library.Data.Entities;
using Library.Data.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Library.Business.Interfaces
{
    public interface IBookRentalService : IRepository<BookRental>
    {
        List<BookRental> GetByUser(int userId);
        List<BookRental> GetByBook(int bookId);
        List<BookRental> GetPassedDueDate();
        List<BookRental> GetCurrentlyRented();
        List<BookRentalsSummary> GetBookRentalsSummaries();
        int Rent(int bookId, int userId);
        bool ReturnBook(int bookId, int userId);
    }
}
