using Library.Data.Entities;
using Library.Data.Interfaces;

namespace Library.Data.Repositories
{
    public class BookRepository : IBookRepository
    {
        private readonly DataContext _context;

        public BookRepository(DataContext context)
        {
            this._context = context;
        }

        public Book Add(Book t)
        {
            t.CreatedDate = DateTime.UtcNow;
            _context.Add(t);
            _context.SaveChanges();
            return t;
        }

        public void Delete(int id)
        {
            var book = _context.Books.FirstOrDefault(d => d.Id == id);
            if (book != null)
            {
                book.DeletedDate = DateTime.UtcNow;
                _context.Books.UpdateRange(book);
                _context.SaveChanges();
            }           
        }

        public Book FindById(int id)
        {
            return _context.Books.FirstOrDefault(d => d.Id == id);
        }

        public List<Book> GetAll()
        {
            return _context.Books.ToList();
        }

        public List<Book> GetByAuthor(string author)
        {
            return _context.Books.Where(d => d.Author == author).ToList();
        }

        public List<Book> GetByGenre(Genre genre)
        {
            return _context.Books.Where(d => d.Genre == genre).ToList();
        }

        public List<Book> GetBySearchFilter(SearchFilter searchFilter)
        {
            var searchQuery = _context.Books.Where(d => d.Id != 0);

            if(!string.IsNullOrEmpty(searchFilter.Title))
            {
                searchQuery = searchQuery.Where(d => 
                    d.Title.Contains(searchFilter.Title)
                );
            }

            if(!string.IsNullOrEmpty(searchFilter.Author))
            {
                searchQuery = searchQuery.Where(d =>
                    d.Author.Contains(searchFilter.Author)
                );
            }

            if(!string.IsNullOrEmpty(searchFilter.Genre))
            {
                if(searchFilter.Genre == "All")
                {
                    searchQuery = searchQuery;
                }
                else
                {
                    if(Enum.TryParse(searchFilter.Genre, out Genre genre)) {
                        searchQuery = searchQuery.Where(searchQuery =>
                                searchQuery.Genre.Equals(genre)
                        );
                    }
                    else
                    {
                        throw new Exception("Invalid Enum For Genre");
                    }
                    
                }
            }
            var book = searchQuery.ToList();
            return book;
        }

        public List<Book> GetByTitle(string title)
        {
            return _context.Books.Where(d => d.Title == title).ToList();
        }

        public List<Book> Search(string searchTerm)
        {
            return _context.Books.Where(d =>
                d.Title.Contains(searchTerm)
                || d.Author.Contains(searchTerm)
                )
                .ToList();
        }

        public Book Update(Book t)
        {
            t.ModifiedDate = DateTime.UtcNow;
            _context.Books.Update(t);
            _context.SaveChanges();
            return t;
        }
    }
}
