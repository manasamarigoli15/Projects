using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace Library.Exceptions
{
    public class InvalidRentRequestException : Exception
    {
        public InvalidRentRequestException()
        {
        }

        public InvalidRentRequestException(string? message) : base(message)
        {
        }

        public InvalidRentRequestException(string? message, Exception? innerException) : base(message, innerException)
        {
        }

        protected InvalidRentRequestException(SerializationInfo info, StreamingContext context) : base(info, context)
        {
        }
    }
}
