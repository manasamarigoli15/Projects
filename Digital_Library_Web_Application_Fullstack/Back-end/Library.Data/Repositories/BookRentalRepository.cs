using Library.Data.Entities;
using Library.Data.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Library.Data.Repositories
{
    public class BookRentalRepository : IBookRentalRepository
    {
        private readonly DataContext _context;

        public BookRentalRepository(DataContext context)
        {
            this._context = context;
        }

        public BookRental Add(BookRental t)
        {
            t.CreatedDate = DateTime.Now;
            _context.BookRentals.Add(t);
            _context.SaveChanges();
            return t;
        }

        public void Delete(int id)
        {
            var rentedBook = _context.BookRentals.FirstOrDefault(d => d.Id == id);
            rentedBook.DeletedDate = DateTime.UtcNow;
            _context.BookRentals.UpdateRange(rentedBook);
            _context.SaveChanges();
        }

        public BookRental FindById(int id)
        {
            return _context.BookRentals.FirstOrDefault(d => d.Id == id);
        }

        public List<BookRental> GetAll()
        {
            return _context.BookRentals
                                        .Include(d => d.Book)
                                        .Include(d => d.User)
                                        .ToList();
        }

        public List<BookRental> GetByBook(int bookId)
        {
            return _context.BookRentals
                                        .Include(d => d.Book)
                                        .Include(d => d.User)
                                        .Where(d => d.Id == bookId)
                                        .ToList();
        }

        public List<BookRental> GetByUser(int userId)
        {
            return _context.BookRentals
                                        .Include(d => d.Book)
                                        .Include(d => d.User)
                                        .Where(d => d.User.Id == userId)
                                        .ToList();
        }

        public List<BookRental> GetCurrentlyRented()
        {
            return _context.BookRentals
                                        .Include(d => d.Book)
                                        .Include(d => d.User)
                                        .Where(d => d.ActualReturnDate == null
                                         && d.HasReturned == false)
                                        .ToList();
        }

        public List<BookRental> GetPassedDueDate()
        {
            return _context.BookRentals
                                        .Include(d => d.Book)
                                        .Include(d => d.User)
                                        .Where(d => d.DueDate >= DateTime.UtcNow
                                        && d.ActualReturnDate == null)
                                        .ToList();
        }

        public List<BookRental> GetUnReturned()
        {
            return _context.BookRentals
                                        .Include(d => d.Book)
                                        .Include(d => d.User)
                                        .Where(d => d.ActualReturnDate == null)
                                        .ToList();
        }

        public BookRental Update(BookRental t)
        {
            t.ModifiedDate = DateTime.UtcNow;
            _context.BookRentals.Update(t);
            _context.SaveChanges();
            return t;
        }

    }
}
