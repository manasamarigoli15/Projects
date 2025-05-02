using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace Library.Exceptions
{
    public class DuplicateBookException : Exception
    {
        public DuplicateBookException()
        {
        }

        public DuplicateBookException(string? message) : base(message)
        {
        }

        public DuplicateBookException(string? message, Exception? innerException) : base(message, innerException)
        {
        }

        protected DuplicateBookException(SerializationInfo info, StreamingContext context) : base(info, context)
        {
        }
    }
}
