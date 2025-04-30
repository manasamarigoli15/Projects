using Properties.Admin;

namespace Api.Properties.Admin.Models
{
    public class PropertyInfo : BaseObject
    {
        public string PropertyType { get; set; }

        public string PropertyRegNum { get; set; }
        public string Description { get; set; }
        public string AreaSqft { get; set; }
        public string FurnishedStatus { get; set; }
        public string NumberOfFloors { get; set; }
        public string PropertyAge { get; set; }
        public string Address { get; set; }
        public string Price { get; set; }
        public string City { get; set; }
        public string Location { get; set; }
        public Category CategoryType { get; set; }
        public PropertyStatus PropertyStatus { get; set; }
        public Featured Featured { get; set; }
        public string AgencyId { get; set; }
        public string AgencyName { get; set; }
        public string AgencyPhoneNumber { get; set; }
        public string AgencyAddress { get; set; }
        public List<Image> Images { get; set; }
    }
}
