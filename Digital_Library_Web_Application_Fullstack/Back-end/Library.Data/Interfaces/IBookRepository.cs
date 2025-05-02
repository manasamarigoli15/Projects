using Library.Data.Entities;

namespace Library.Data.Interfaces
{
    public interface IBookRepository : IRepository<Book>
    {
        List<Book> GetByTitle(string title);
        List<Book> GetByAuthor(string author);
        List<Book> Search(string searchTerm);
        List<Book> GetByGenre(Genre genre);
        List<Book> GetBySearchFilter(SearchFilter searchFilter);

    }
}
