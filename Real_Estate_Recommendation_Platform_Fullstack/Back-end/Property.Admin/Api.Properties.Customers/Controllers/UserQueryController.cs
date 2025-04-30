using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Properties.Admin;
using Properties.Data;

namespace Api.Properties.Customers.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
        public class UserQueryController : ControllerBase
        {
            IQueryRepository queryRepository;
            public UserQueryController(IQueryRepository queryRepository)
            {
                this.queryRepository = queryRepository;
            }
            [HttpGet]
            public IActionResult Get()
            {
                var queries = queryRepository.GetAll();
                return Ok(queries);
            }
            [HttpPost]
            public IActionResult Post(Query query)
            {
                var q = new Query();
                q.Name = query.Name;
                q.Email = query.Email;
                q.Questions = query.Questions;
                q.Answers = query.Answers;
                var newQuery = queryRepository.Add(q);
                return Ok(newQuery);
            }
           
        }
}
