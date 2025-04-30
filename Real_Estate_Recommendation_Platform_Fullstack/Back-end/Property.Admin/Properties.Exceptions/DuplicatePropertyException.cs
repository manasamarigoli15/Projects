using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace Properties.Exceptions
{
    public class DuplicatePropertyException : Exception
    {
        public DuplicatePropertyException()
        {
        }

        public DuplicatePropertyException(string? message) : base(message)
        {
        }

        public DuplicatePropertyException(string? message, Exception? innerException) : base(message, innerException)
        {
        }

        protected DuplicatePropertyException(SerializationInfo info, StreamingContext context) : base(info, context)
        {
        }
    }
}
