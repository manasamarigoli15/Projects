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
    public class PropertyRepository : IPropertyRepository
    {
        private PropertyDbContext context;

        public PropertyRepository(PropertyDbContext context)
        {
            this.context = context;
        }
        public Property Add(Property t)
        {
            if (context.Properties
               .Any(d => d.PropertyRegNum == t.PropertyRegNum))
                throw new DuplicatePropertyException($"Property with the registered number :" +
                    $" {t.PropertyRegNum} already exist");
            t.CreatedDate = DateTime.UtcNow;
            context.Properties.Add(t);
            context.SaveChanges();
            return t;
        }

        public void Delete(int id)
        {
            var property = context.Properties.Include(d => d.AgencyInfo).Include(d => d.Images).FirstOrDefault(d => d.Id == id);
            if (property != null)
            {
                property.DeletedDate = DateTime.Now;
                context.Properties.UpdateRange(property);
                context.SaveChanges();
            }
        }

        public Property FindById(int id)
        {
            var property = context.Properties.Include(d => d.Images).
                                              Include(d => d.AgencyInfo).FirstOrDefault(d => d.Id == id);
            return property;
        }

        public List<Property> GetAll()
        {
            var property = context.Properties.Include(d => d.Images).Include(d => d.AgencyInfo).ToList();
            return property;
        }

        public List<Property> GetByCategoryType(Category categorytype)
        {
            var property = context.Properties.Include(d => d.Images).Include(d => d.AgencyInfo).Where(d => d.CategoryType == categorytype).ToList();
            return property;
        }

        public List<Property> GetByCity(string city)
        {
            var property = context.Properties.Include(d => d.Images).Include(d => d.AgencyInfo).Where(d => d.City == city).ToList();
            return property;
        }

        public List<Property> GetByFurnishtedStatus(string furnishedStatus)
        {
            var property = context.Properties.Include(d => d.Images).Include(d => d.AgencyInfo).Where(d => d.FurnishedStatus == furnishedStatus).ToList();
            return property;
        }

        public List<Property> GetByLocation(string location)
        {
            var property = context.Properties.Include(d => d.Images).Include(d => d.AgencyInfo).Where(d => d.Location == location).ToList();
            return property;
        }

        public List<Property> GetByPropertyType(string propertytype)
        {
            var property = context.Properties.Include(d => d.Images).Include(d => d.AgencyInfo).Where(d => d.PropertyType == propertytype).ToList();
            return property;
        }

        public List<Property> GetBySearch(string searchTerm)
        {
            var property = context.Properties.Where(d => d.Location.Contains(searchTerm) || d.PropertyType.Contains(searchTerm)).ToList();
            return property;
        }

        public List<Property> GetBySearchFilter(SearchFilter searchFilter)
        {
            var query = context.Properties.Include(d=>d.Images).Include(d => d.AgencyInfo).Where(d => d.Id != 0);

            if (!string.IsNullOrEmpty(searchFilter.City))
            {
                query = query.Where(d => d.City.Contains(searchFilter.City));
            }

            if(!string.IsNullOrEmpty(searchFilter.PropertyType))
            {
                if (searchFilter.PropertyType == "All")
                    query = query;
                else
                    query = query.Where(query => query.PropertyType.Contains(searchFilter.PropertyType));
            }

            if(!string.IsNullOrEmpty(searchFilter.FurnishedStatus))
            {
                if (searchFilter.FurnishedStatus == "All")
                    query = query;
                else
                    query = query.Where(query => query.FurnishedStatus.Contains(searchFilter.FurnishedStatus));
            }

            var property = query.ToList();

            return property;
        }

        public Property Update(Property t)
        {
            t.ModifiedDate = DateTime.Now;
            context.Properties.Update(t);
            context.SaveChanges();

            return t;
        }

        
    }
}
