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
    public class ShortlistRepository : IShortlistRepository
    {
        private PropertyDbContext context;
        public ShortlistRepository(PropertyDbContext context)
        {
            this.context = context;
        }
       

        public Shortlist Add(Shortlist t)
        {
            if (context.ShortLists
              .Any(d => d.propertyshortlist == t.propertyshortlist && d.user == t.user))
                throw new DuplicateShortlistException($"Property with the registered number :" +
                    $" {t.propertyshortlist} already shortlisted");

            t.CreatedDate = DateTime.UtcNow;
            context.ShortLists.Add(t);
            context.SaveChanges();
            return t;
        }

        public void Delete(int id)
        {
            var shortlist = context.ShortLists.FirstOrDefault(d => d.propertyshortlist.Id == id);
            if (shortlist != null)
            {
                shortlist.DeletedDate = DateTime.Now;
                context.ShortLists.UpdateRange(shortlist);
                context.SaveChanges();
            }
        }
       

        public Shortlist Update(Shortlist t)
        {
            throw new NotImplementedException();
        }

        Shortlist IRepository<Shortlist>.FindById(int id)
        {
            var shortlist = context.ShortLists.FirstOrDefault(d => d.Id == id);
            return shortlist;
        }

        List<Shortlist> IRepository<Shortlist>.GetAll()
        {
            var shortlist = context.ShortLists.Include(d => d.propertyshortlist).Include(d => d.propertyshortlist.Images).Include(d => d.propertyshortlist.AgencyInfo).Include(d => d.user).ToList();
            return shortlist;
        }
    }
}
