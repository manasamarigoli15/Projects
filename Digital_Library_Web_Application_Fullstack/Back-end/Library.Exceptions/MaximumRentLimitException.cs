using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace Library.Exceptions
{
    public class MaximumRentLimitException : Exception
    {
        public MaximumRentLimitException()
        {
        }

        public MaximumRentLimitException(string? message) : base(message)
        {
        }

        public MaximumRentLimitException(string? message, Exception? innerException) : base(message, innerException)
        {
        }

        protected MaximumRentLimitException(SerializationInfo info, StreamingContext context) : base(info, context)
        {
        }
    }
}
