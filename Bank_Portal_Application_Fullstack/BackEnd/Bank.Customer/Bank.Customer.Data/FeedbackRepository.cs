using Customer.Exceptions;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bank.Customer.Data
{
    public class FeedbackRepository : IFeedbackRepository
    {
        private BankDbContext context;
        private ILogger<FeedbackRepository> log;

        public FeedbackRepository(BankDbContext context, ILogger<FeedbackRepository> log)
        {
            this.context = context;
            this.log = log;
        }

        public Feedback Add(Feedback t)
        {
            log.LogInformation("Adding new feedback to the database");

            t.CreatedDate = DateTime.Now;
            context.Feedbacks.Add(t);
            context.SaveChanges();

            return t;
        }

        public void Delete(int id)
        {
            log.LogWarning($"Deleting feedback with id {id}");

            var feedback = context.Feedbacks.FirstOrDefault(d => d.Id == id);

            if (feedback != null)
            {
                feedback.DeletedDate = DateTime.Now;
                context.Feedbacks.UpdateRange(feedback);
                context.SaveChanges();
            }
            else
                throw new RequestNotFoundException($"Feedback with id {id} was not found");
        }

        public Feedback FindById(int id)
        {
            throw new NotImplementedException();
        }

        public List<Feedback> GetAll()
        {
            throw new NotImplementedException();
        }
        
        public List<Feedback> GetByAccountNo(string accNo)
        {
            log.LogInformation($"Fetching the feedback of the user with account number {accNo}");

            var feedback = context.Feedbacks.Where(d => d.AccountNumber.Equals(accNo) || d.RegistrationId.Equals(accNo)).ToList();

            if(feedback != null)
                return feedback;
            else
                throw new RequestNotFoundException($"Feedback for the user with account number {accNo} was not found");
        }

        public Feedback Update(Feedback t)
        {
            log.LogInformation($"Updating feedback with id {t.Id}");

            t.ModifiedDate = DateTime.Now;
            context.Feedbacks.Update(t);
            context.SaveChanges();
        
            return t;
        }
    }
}
