using System.ComponentModel.DataAnnotations;

namespace Bank.Customer
{
    public abstract class BaseObject
    {
        /// <summary>
        /// Unique Identifier which will act as the primary key
        /// </summary>
        [Key]
        public int Id { get; set; }

       // public Status Status { get; set; } //= Status.Pending;
        public DateTime CreatedDate { get; set; }

        /// <summary>
        /// Last modified date in UTC
        /// </summary>
        public DateTime? ModifiedDate { get; set; }

        /// <summary>
        /// Deleted date in UTC
        /// </summary>
        public DateTime? DeletedDate { get; set; }

    }
}
