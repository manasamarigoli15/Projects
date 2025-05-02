using Library.Data.Entities;
using Library.Data.Interfaces;
using Library.Data.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Library.Data.Test
{
    public class BookRentalRepositoryTest
    {
        IUserRepository _userRepository;
        IBookRentalRepository _bookRentalRepository;
        IBookRepository _bookRepository;

        DataContext _context;

        [SetUp]
        public void Setup()
        {
            _context = new DataContext();
            _bookRepository = new BookRepository(_context);
            _bookRentalRepository = new BookRentalRepository(_context);
            _userRepository = new UserRepository(_context);
        }

        [Test]
        public void Rental_ValidBook_ReturnsRentalBook()
        {
            //Arrange
            var book = _bookRepository.FindById(2);
            var user = _userRepository.FindById(1);

            //Act
            BookRental b = new BookRental();
            b.Book = book;
            b.User = user;
            b.RentalDate = DateTime.UtcNow;
            b.DueDate = DateTime.UtcNow.AddDays(7);
            var rent = _bookRentalRepository.Add(b);

            //Assert
            Assert.IsNotNull(b);
            Assert.NotZero(b.Id);

        }
    }
}
