using Library.Business.Interfaces;
using Library.Data.Entities;
using Library.Data.Interfaces;

namespace Library.Business.Services
{
    public class BookService : IBookService
    {
        private readonly IBookRepository _bookRepository;

        public BookService(IBookRepository bookRepository)
        {
            this._bookRepository = bookRepository;
        }

        public Book Add(Book t)
        {
            if(t != null)
            {
                _bookRepository.Add(t);
            }
            return t;
        }

        public void Delete(int id)
        {
            if(id != 0)
            {
                _bookRepository.Delete(id);
            }
        }

        public Book FindById(int id)
        {
            return _bookRepository.FindById(id);
        }

        public List<Book> GetAll()
        {
            return _bookRepository.GetAll();
        }

        public List<Book> GetByAuthor(string author)
        {
            return _bookRepository.GetByAuthor(author);
        }

        public List<Book> GetByGenre(Genre genre)
        {
            return _bookRepository.GetByGenre(genre);
        }

        public List<Book> GetBySearchFilter(SearchFilter searchFilter)
        {
            return _bookRepository.GetBySearchFilter(searchFilter);
        }

        public List<Book> GetByTitle(string title)
        {
            return (_bookRepository.GetByTitle(title));
        }

        public List<Book> Search(string searchTerm)
        {
            return _bookRepository.Search(searchTerm);
        }

        public Book Update(Book t)
        {
            return _bookRepository.Update(t);
        }
    }
}
