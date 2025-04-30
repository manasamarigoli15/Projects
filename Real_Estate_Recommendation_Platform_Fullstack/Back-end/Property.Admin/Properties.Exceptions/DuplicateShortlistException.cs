using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace Properties.Exceptions
{
    public class DuplicateShortlistException : Exception
    {
        public DuplicateShortlistException()
        {
        }

        public DuplicateShortlistException(string? message) : base(message)
        {
        }

        public DuplicateShortlistException(string? message, Exception? innerException) : base(message, innerException)
        {
        }

        protected DuplicateShortlistException(SerializationInfo info, StreamingContext context) : base(info, context)
        {
        }
    }
}
