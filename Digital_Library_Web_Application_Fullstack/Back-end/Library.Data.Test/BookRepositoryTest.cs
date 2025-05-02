using Library.Data.Entities;
using Library.Data.Interfaces;
using Library.Data.Repositories;


namespace Library.Data.Test
{
    public class BookRepositoryTest
    {
        DataContext _context;
        IBookRepository _bookRepository;

        [SetUp]
        public void Setup()
        {
            _context = new DataContext();
            _bookRepository = new BookRepository(_context);
        }

        [Test]
        public void AddProperty_Valid_ReturnsWithId()
        {
            //Arrange
            var book = CreateDummyBook();

            //Act
            var newBook = _bookRepository.Add(book);

            Assert.IsNotNull(newBook);
            Assert.NotZero(newBook.Id);
        }

        Book CreateDummyBook()
        {
            var book = new Book()
            {
                Title = "Dune",
                Author = "Frank Herbert",
                Genre = Genre.ScienceFiction,
                RentPerDay = 150,
                TotalNumberOfCopies = 6,
                NumberOfCopiesAvailable = 3,
                NumberOfCopiesRentedOut = 3,
                ImageUrl = "https://www.hollywoodreporter.com/wp-content/uploads/2019/04/dune_hc-p_2019.jpg?w=1047&h=1126&crop=1"
            };
            return book;
        }
    }
}
