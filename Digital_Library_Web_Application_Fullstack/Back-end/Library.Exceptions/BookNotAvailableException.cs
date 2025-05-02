using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace Library.Exceptions
{
    public class BookNotAvailableException : Exception
    {
        public BookNotAvailableException()
        {
        }

        public BookNotAvailableException(string? message) : base(message)
        {
        }

        public BookNotAvailableException(string? message, Exception? innerException) : base(message, innerException)
        {
        }

        protected BookNotAvailableException(SerializationInfo info, StreamingContext context) : base(info, context)
        {
        }
    }
}
