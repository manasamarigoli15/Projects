using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace Customer.Exceptions
{
    public class RequestNotFoundException : Exception
    {
        public RequestNotFoundException()
        {
        }

        public RequestNotFoundException(string? message) : base(message)
        {
        }

        public RequestNotFoundException(string? message, Exception? innerException) : base(message, innerException)
        {
        }

        protected RequestNotFoundException(SerializationInfo info, StreamingContext context) : base(info, context)
        {
        }
    }
}
