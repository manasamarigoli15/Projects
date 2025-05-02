using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Library.Data.Entities
{
    public enum Role
    {
        Admin = 1,
        User
    }
    public class User : BaseObject
    {

        [Required]
        [StringLength(50, MinimumLength = 3)]
        [RegularExpression("^[A-Za-z ]{3,50}$")]
        public string Name { get; set; }

        [Required]
        [StringLength(320, MinimumLength = 5)]
        [RegularExpression("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]
        public string Email { get; set; }

        [Required]
        [StringLength(500, MinimumLength = 8)]
        public string Password { get; set; }

        [Required]
        public string PhoneNumber { get; set; }

        [Required]
        public string Address { get; set; }

        [Required]
        
        public Role Role { get; set; }
    }
}
