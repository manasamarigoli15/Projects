using Library.Business.Interfaces;
using Library.Exceptions;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Api.Library.Member.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class BookRentalController : ControllerBase
    {
        private readonly IBookRentalService _bookRentalService;

        public BookRentalController(IBookRentalService bookRentalService)
        {
            this._bookRentalService = bookRentalService;
        }

        [HttpPost]
        public IActionResult Post(RentRequest request)
        {
            var user = HttpContext.User;
            var userId = int.Parse(user.Identity.Name);

            try
            {
                var rent = _bookRentalService.Rent(request.BookId, userId);
                return Ok();
            }
            catch (MaximumRentLimitException excep)
            {
                return BadRequest(excep.Message);
            }
            catch (BookNotAvailableException excp)
            {
                return BadRequest(excp.Message);
            }
            catch (InvalidRentRequestException exp)
            {
                return BadRequest(exp.Message);
            }
        }

        [HttpGet]
        public IActionResult Get()
        {

            var user = HttpContext.User;
            var userId = int.Parse(user.Identity.Name);
            try
            {
                var rentedBooks = _bookRentalService.GetByUser(userId);
                return Ok(rentedBooks);
            }
            catch(Exception excep)
            {
                return BadRequest(excep.Message);
            }
        }

        [HttpPost("returnBook/{returnBook}")]
        public IActionResult PostReturnRequest(ReturnRequest request)
        {
            var user = HttpContext.User;
            var userId = int.Parse(user.Identity.Name);

            try
            {
                var rent = _bookRentalService.ReturnBook(request.BookId, userId);
                return Ok();
            }
            catch (Exception excep)
            {
                return BadRequest(excep.Message);
            }
           
        }
    }

    public class RentRequest
    {
        public int BookId { get; set; }
    }

    public class ReturnRequest
    {
        public int BookId { get; set; }
    }
}
