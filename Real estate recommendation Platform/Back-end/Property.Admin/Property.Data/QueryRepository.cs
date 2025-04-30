using Microsoft.EntityFrameworkCore;
using Properties.Admin;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Properties.Data
{
    public class QueryRepository : IQueryRepository
    {
        private PropertyDbContext context;
        public QueryRepository(PropertyDbContext context)
        {
            this.context = context;
        }
        public Query Add(Query t)
        {
            t.CreatedDate = DateTime.UtcNow;
            context.Queries.Add(t);
            context.SaveChanges();
            return t;
        }

        

        public void Delete(int id)
        {
            var query = context.Queries.FirstOrDefault(d => d.Id == id);
            if (query != null)
            {
                query.DeletedDate = DateTime.Now;
                context.Queries.UpdateRange(query);
                context.SaveChanges();
            }
        }
        public Query FindById(int id)
        {
            var query = context.Queries.FirstOrDefault(d => d.Id == id);
            return query;
        }
        public List<Query> GetAll()
        {
            var query = context.Queries.ToList();
            return query;
        }
        public Query Update(Query t)
        {
            t.ModifiedDate = DateTime.Now;
            context.Queries.Update(t);
            context.SaveChanges();
            return t;
        }
    }
}
