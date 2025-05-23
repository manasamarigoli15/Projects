﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace Customer.Exceptions
{
    public class UserNotFoundException : Exception
    {
        public UserNotFoundException()
        {
        }

        public UserNotFoundException(string? message) : base(message)
        {
        }

        public UserNotFoundException(string? message, Exception? innerException) : base(message, innerException)
        {
        }

        protected UserNotFoundException(SerializationInfo info, StreamingContext context) : base(info, context)
        {
        }
    }
}
