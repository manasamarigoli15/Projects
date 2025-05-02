using System.ComponentModel.DataAnnotations;

namespace Bank.Admin
{
    public abstract class BaseObject
    {
        /// <summary>
        /// Unique Identifier which will act as the primary key
        /// </summary>
        [Key]
        public int Id { get; set; }

        /// <summary>
        /// Created date in UTC
        /// </summary>
        public DateTimeOffset CreatedDate { get; set; }

        /// <summary>
        /// Last modified date in UTC
        /// </summary>
        public DateTimeOffset? ModifiedDate { get; set; }

        /// <summary>
        /// Deleted date in UTC
        /// </summary>
        public DateTimeOffset? DeletedDate { get; set; }

    }
}
