
using System.ComponentModel.DataAnnotations;

namespace Bank.Customer
{
    /// <summary>
    /// Type of bank accounts available for customers
    /// </summary>
    public enum AccountType
    {
        Savings=1,
        Salary,
        Loan
    }
    /// <summary>
    /// Status for customer account 
    /// </summary>
    public enum Status
    {
        Pending=1,
        Active,
        Inactive
    }
    public class Customers : BaseObject
    {
        /// <summary>
        /// Customer registration ID which is generated automatically
        /// </summary>

        public string? RegistrationId { get; set; }

        /// <summary>
        /// Customer account number which is nullable initially and generated automatically
        /// </summary>
        [StringLength(50, MinimumLength = 12)]
        public string? AccountNumber { get; set; }
        /// <summary>
        /// FirstName of the customer
        /// </summary>

        [Required]
        [StringLength(50, MinimumLength = 3)]
        [RegularExpression("^[A-Za-z ]{3,50}$")]
        public string FirstName { get; set; }

        /// <summary>
        /// LastName of the customer
        /// </summary>

        [Required]
        [StringLength(50, MinimumLength = 1)]
        [RegularExpression("^[A-Za-z ]{3,50}$")]
        public string LastName { get; set; }
        /// <summary>
        /// Email of the customer
        /// </summary>

        [Required]
        [StringLength(320, MinimumLength = 5)]
        [RegularExpression("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]
        public string Email { get; set; }
        /// <summary>
        /// Password of the customer
        /// </summary>

        [StringLength(150, MinimumLength = 8)]
        public string? Password { get; set; }
        /// <summary>
        /// Phone number of the customer
        /// </summary>

        [Required]
        [StringLength(20, MinimumLength = 10)]
        public string PhoneNumber { get; set; }

        /// <summary>
        /// Gender of the customer
        /// </summary>

        [Required]
        public string Gender { get; set; }
        /// <summary>
        /// Address of the customer
        /// </summary>

        [Required]
        public string Address { get; set; }
        /// <summary>
        /// AadharNumber of the customer
        /// </summary>

        [Required]
        [RegularExpression("^[0-9]{12}$")]
        public long AadharNumber { get; set; }

        // [RegularExpression("^[A-Z]{5}[0-9]{4}[A-Z]{1}$")]
        /// <summary>
        /// PanNumber of the customer
        /// </summary>
        public string? PanNumber { get; set; }
        /// <summary>
        /// DateOfBirth of the customer
        /// </summary>

        [Required]
        public string DateOfBirth { get; set; }
        /// <summary>
        /// Occupation of the customer
        /// </summary>

        [Required]
        public string Occupation { get; set; }
        /// <summary>
        /// type of account of the customer
        /// </summary>

        [Required]
        public AccountType AccountType { get; set; }
        /// <summary>
        /// status of the customer account
        /// </summary>
        public Status Status { get; set; }
        /// <summary>
        /// total balance of the customer
        /// </summary>
        public float TotalBalance { get; set; } = 0;
        /// <summary>
        /// photo of the customer
        /// </summary>
        public string profileImg { get; set; }
        /// <summary>
        /// aadhar proof of the customer
        /// </summary>
        public string adharImg { get; set; }
        /// <summary>
        /// pan proof of the customer
        /// </summary>
        public string panImg { get; set; }

    }
}
