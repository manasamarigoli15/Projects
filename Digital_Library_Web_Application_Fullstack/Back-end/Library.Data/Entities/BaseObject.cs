using System.ComponentModel.DataAnnotations;

namespace Library.Data.Entities
{
    public class BaseObject
    {

        [Key]
        public int Id { get; set; }

        public DateTime CreatedDate { get; set; }

        public DateTime? ModifiedDate { get; set; }

        public DateTime? DeletedDate { get; set; }
    }
}
