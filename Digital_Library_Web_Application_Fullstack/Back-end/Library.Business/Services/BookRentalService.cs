using Library.Business.Interfaces;
using Library.Data.Entities;
using Library.Data.Interfaces;
using Library.Data.Repositories;
using Library.Exceptions;
using System.Net;

namespace Library.Business.Services
{
    public class BookRentalService : IBookRentalService
    {
        private readonly IBookRentalRepository _bookRentalRepository;
        private readonly IUserRepository _userRepository;
        private readonly IBookRepository _bookRepository;

        public BookRentalService(
            IBookRentalRepository bookRentalRepository,
            IUserRepository userRepository, 
            IBookRepository bookRepository)
        {
            this._bookRentalRepository = bookRentalRepository;
            this._userRepository = userRepository;
            this._bookRepository = bookRepository;
        }

        public BookRental Add(BookRental t)
        {
            if(t != null)
            {
                _bookRentalRepository.Add(t);
            }
            return t;
        }

        public void Delete(int id)
        {
            if(id != 0)
            {
                _bookRentalRepository.Delete(id);
            }
        }

        public BookRental FindById(int id)
        {
            return _bookRentalRepository.FindById(id);
        }

        public List<BookRental> GetAll()
        {
            return _bookRentalRepository.GetAll();
        }

        public List<BookRental> GetByBook(int bookId)
        {
            return _bookRentalRepository.GetByBook(bookId);
        }

        public List<BookRental> GetByUser(int userId)
        {
            return _bookRentalRepository.GetByUser(userId);
        }

        public List<BookRental> GetPassedDueDate()
        {
            return _bookRentalRepository.GetPassedDueDate();
        }

        public List<BookRental> GetCurrentlyRented()
        {
            return _bookRentalRepository.GetCurrentlyRented();
        }
        public int Rent(int bookId, int userId)
        {
            var user = _userRepository.FindById(userId);
            //Admins cant rent book
            if (user.Role != Role.User)
                throw new InvalidOperationException
                    ("You must be a member to rent the book");


            //Check if book exists
            var book = _bookRepository.FindById(bookId);

            if (book == null)
            {
                throw new BookNotAvailableException($"Book with book Id {bookId} does not exist");
            }
            var isBookAvailableForRent = book.NumberOfCopiesAvailable > 0;
            if (!isBookAvailableForRent)
                throw new BookNotAvailableException("Book is not available for rent");

            //Check if the user has any pending returns
            var totalUserRents = _bookRentalRepository
                                    .GetByUser(userId)
                                    .Where(d => d.ActualReturnDate == null)
                                    .Count();

            if (totalUserRents >= 2)
                throw new MaximumRentLimitException("You have reached the max rentals");

            //Check if user has already rented requested book
            var hasUserAlreadyRentedBook = _bookRentalRepository
                                                            .GetByUser(userId)
                                                            .Where(rental => rental.Book.Id == bookId && rental.ActualReturnDate == null).Count() > 0;

            if (hasUserAlreadyRentedBook)
            {
                throw new InvalidRentRequestException("You have already rented this book");
            }

            var rentedBook = new BookRental();
            book.NumberOfCopiesAvailable -= 1;
            book.NumberOfCopiesRentedOut += 1;
            rentedBook.Book = book;
            rentedBook.User = user;
            rentedBook.RentalDate = DateTime.UtcNow;
            rentedBook.DueDate = DateTime.UtcNow.AddDays(7);
            rentedBook = _bookRentalRepository.Add(rentedBook);

            //book.NumberOfCopiesAvailable -= 1;
            //_bookRepository.Update(book);
            return rentedBook.Id;
        }

        public bool ReturnBook(int bookId, int userId)
        {


            //Check if anyone has taken this book
            var rentedBook = _bookRentalRepository
                                    .GetByUser(userId)
                                    .FirstOrDefault
                                    (d => d.Book.Id == bookId 
                                    && d.ActualReturnDate == null 
                                    && d.HasReturned == false);


            if (rentedBook != null)
            {
                var book = rentedBook.Book;
                rentedBook.ActualReturnDate = DateTime.UtcNow;
                rentedBook.HasReturned = true;
                var rentedDays = (int)(rentedBook.ActualReturnDate.Value - rentedBook.RentalDate).TotalDays;
                rentedBook.RentAmount = rentedDays * book.RentPerDay;

                var finePerDay = 20;
                rentedBook.FineAmount = 0;
                if (rentedDays > 7)
                {
                    rentedBook.FineAmount = (rentedDays - 7) * finePerDay;
                    rentedBook.RentAmount += rentedBook.FineAmount;
                }

                book.NumberOfCopiesRentedOut -= 1;
                book.NumberOfCopiesAvailable += 1;
                _bookRentalRepository.Update(rentedBook);
                return true;
            }

            return false;
        }

        public BookRental Update(BookRental t)
        {
            return _bookRentalRepository.Update(t);
        }

        public List<BookRentalsSummary> GetBookRentalsSummaries()
        {
            try
            {
                var currentMonth = DateTime.Today.Month;
                var currentYear = DateTime.Today.Year;

                var query = _bookRentalRepository.GetAll()
                                            .Where(br => br.ActualReturnDate.HasValue 
                                            && br.ActualReturnDate.Value.Month == currentMonth 
                                            && br.ActualReturnDate.Value.Year == currentYear)
                                            .GroupBy(br => new { br.Book.Id, br.Book.Title })
                                            .Select(g => new BookRentalsSummary
                                            {
                                                BookId = g.Key.Id,
                                                Title = g.Key.Title,
                                                Revenue = (float)g.Sum(x => x.RentAmount),
                                                NumberOfCopiesReturned = g.Count()
                                            })
                                            .ToList();
                return query;
            }
            catch(Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

    }
}
