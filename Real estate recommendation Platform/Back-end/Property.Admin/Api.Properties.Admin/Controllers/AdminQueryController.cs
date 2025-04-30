using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Properties.Admin;
using Properties.Data;

namespace Api.Properties.Admin.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminQueryController : ControllerBase
    {
        IQueryRepository queryRepository;
        public AdminQueryController(IQueryRepository queryRepository)
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
            q.Questions = query.Questions;
            q.Answers = query.Answers;
            var newQuery = queryRepository.Add(q);
            return Ok(newQuery);
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var query = queryRepository.FindById(id);
            if (query != null)
                return Ok(query);
            else
                return NotFound();
        }

        [HttpPut]
        public IActionResult Put(Query query)
        {
            var updatedquery = queryRepository.Update(query);
            return Ok(updatedquery);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            queryRepository.Delete(id);
            return Ok();
        }
    }
}
