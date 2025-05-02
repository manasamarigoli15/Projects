using Library.Business.Interfaces;
using Library.Data.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Api.Library.Books.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    //[Authorize]
    public class BookController : ControllerBase
    {
        private readonly IBookService _bookService;

        public BookController(IBookService bookService)
        {
            this._bookService = bookService;
        }

        [HttpGet]
        public IActionResult Get()
        {
            var books = _bookService.GetAll();
            return Ok(books);
        }

        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var book = _bookService.FindById(id);
            if (book != null)
                return Ok(book);
            else
                return NotFound();
        }

        [HttpGet("byauthor/{author}")]
        public IActionResult GetByAuthor(string author)
        {
            var books = _bookService.GetByAuthor(author);
            if (books != null && books.Count > 0)
                return Ok(books);
            else
                return NotFound();
        }

        [HttpGet("bygenre/{genre}")]
        public IActionResult GetByGenre(Genre genre)
        {
            var books = _bookService.GetByGenre(genre);
            if (books != null && books.Count > 0)
                return Ok(books);
            else
                return NotFound();
        }

        [HttpGet("search/{search}")]
        public IActionResult Search(string search)
        {
            var books = _bookService.Search(search);
            if (books != null && books.Count > 0)
                return Ok(books);
            else 
                return NotFound();
        }

        [HttpPost]
        public IActionResult GetBySearchFilter(SearchFilter searchFilter)
        {
            var books = _bookService.GetBySearchFilter(searchFilter);
            return Ok(books);
        }
    }
}
