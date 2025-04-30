using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Properties.Admin
{
    /// <summary>
    /// Predefined roles for different users
    /// </summary>
    public enum Role
    {
        Admin = 1,
        Member
    }

    /// <summary>
    /// User Object 
    /// </summary>
    public class User : BaseObject
    {
        /// <summary>
        /// Name of the user. Either Admin or Member
        /// </summary>
        [Required]
        [StringLength(50, MinimumLength = 3)]
        [RegularExpression("^[A-Za-z ]{3,50}$")]
        public string Name { get; set; }

        /// <summary>
        /// Email Address will act as the user login user name as well
        /// </summary>
        [Required]
        [StringLength(320, MinimumLength = 5)]
        [RegularExpression("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]
        public string Email { get; set; }

        /// <summary>
        /// Password for authentication.
        /// </summary>
        [Required]
        [StringLength(50, MinimumLength = 8)]
        public string Password { get; set; }

        /// <summary>
        /// Assigned role for the user
        /// </summary>
        [Required]
        public Role Role { get; set; }


        [Required]
        public string PhoneNumber { get; set; }

        [Required]
        public string Address { get; set; }
    }
}
