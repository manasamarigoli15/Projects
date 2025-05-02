using Library.Business.Interfaces;
using Library.Data.Entities;
using Library.Data.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Api.Library.Admin.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize(Roles = "Admin")]
    public class BookController : ControllerBase
    {
        private readonly IBookService _bookService;
        private readonly IBookRentalService _bookRentalService;

        public BookController(IBookService _bookService, IBookRentalService bookRentalService)
        {
            this._bookService = _bookService;
            this._bookRentalService = bookRentalService;
        }

        [HttpPost]
        public IActionResult Post(Book book)
        {
            var newBook = _bookService.Add(book);
            return Ok(newBook);
        }

        [HttpGet]
        public IActionResult Get()
        {
            var rentedBooks = _bookRentalService.GetAll();
            return Ok(rentedBooks);
        }

        [HttpGet("rentals/summary")]
        public IActionResult GetBookRentalsSummaryForCurrentMonth()
        {
            var summary = _bookRentalService.GetBookRentalsSummaries();
            return Ok(summary);
        }

        [HttpPut]
        public IActionResult Put(Book book)
        {
            var updatedBook = _bookService.Update(book);
            return Ok(updatedBook);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _bookService.Delete(id);
            return Ok("Book deleted successfully.");
        }
    }
}
