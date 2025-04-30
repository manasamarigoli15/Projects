using Microsoft.EntityFrameworkCore;
using Properties.Admin;
using Properties.Exceptions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Properties.Data
{
    public class RequestRepository : IRequestRepository
    {
        private PropertyDbContext context;
        public RequestRepository(PropertyDbContext context)
        {
            this.context = context;
        }
        public Request Add(Request t)
        {
            if (context.Requests
             .Any(d => d.propertyregnum == t.propertyregnum && d.username == t.username))
                throw new DuplicateRequestException($"Property with the registered number :" +
                    $" {t.propertyregnum} already Requested");

            t.CreatedDate = DateTime.UtcNow;
            context.Requests.Add(t);
            context.SaveChanges();
            return t;
        }
        public void Delete(int id)
        {
            var request = context.Requests.FirstOrDefault(d => d.Id == id);
            if (request != null)
            {
                request.DeletedDate = DateTime.Now;
                context.Requests.UpdateRange(request);
                context.SaveChanges();
            }
        }
        public Request FindById(int id)
        {
            var request = context.Requests.FirstOrDefault(d => d.Id == id);
            return request;
        }
        public List<Request> GetAll()
        {
            var request = context.Requests.Include(d => d.propertyregnum).Include(d => d.propertyregnum.Images).Include(d => d.propertyregnum.AgencyInfo).Include(d => d.username).ToList();
            return request;
        }
        public Request Update(Request t)
        {
            throw new NotImplementedException();
        }
    }
}
