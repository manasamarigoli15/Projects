using Library.Data.Entities;
using Library.Data.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Library.Business.Interfaces
{
    public interface IBookService : IRepository<Book>
    {
        List<Book> GetByTitle(string title);
        List<Book> GetByAuthor(string author);
        List<Book> Search(string searchTerm);
        List<Book> GetByGenre(Genre genre);
        List<Book> GetBySearchFilter(SearchFilter searchFilter);
    }
}
