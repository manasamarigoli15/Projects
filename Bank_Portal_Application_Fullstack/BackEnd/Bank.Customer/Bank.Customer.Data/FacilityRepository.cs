using Customer.Exceptions;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bank.Customer.Data
{
    public class FacilityRepository : IFacilityRepository
    {
        IFeedbackRepository feedbackRepository;
        ICustomerRepository customerRepository;
        private BankDbContext context;
        private ILogger<FacilityRepository> log;

        public FacilityRepository(BankDbContext context, IFeedbackRepository feedbackRepository, ICustomerRepository customerRepository,
            ILogger<FacilityRepository> log)
        {
            this.context = context;
            this.feedbackRepository = feedbackRepository;
            this.customerRepository = customerRepository;
            this.log = log;
        }

        public Facility Add(Facility t)
        {
            log.LogInformation($"Adding facilities to the database , opted by the customer");

            t.Status = FacilityStatus.Pending;
            t.CreatedDate = DateTime.Now;
            context.Facilities.Add(t);
            context.SaveChanges();

            return t;
        }

        public void Delete(int id)
        {
            log.LogWarning($"Deleting facility with id {id}");

            var facility = context.Facilities.FirstOrDefault(d => d.Id == id);

            if (facility != null)
            {
                facility.DeletedDate = DateTime.Now;
                context.SaveChanges();
            }
            else
                throw new RequestNotFoundException($"Facility with id {id} was not found");
        }

        public Facility FindById(int id)
        {
            log.LogInformation($"Searching facility with id {id}");

            var facility = context.Facilities.FirstOrDefault(d => d.Id == id);

            if (facility != null)
                return facility;
            else
                throw new RequestNotFoundException($"Facility with id {id} was not found");
        }

        public List<Facility> GetAll()
        {
            log.LogInformation($"Fetching all the facility list from the database");

            var facilities = context.Facilities.ToList();

            if (facilities != null)
                return facilities;
            else
                throw new RequestNotFoundException("No facilities found");
        }

        public Facility Update(Facility t)
        {
            log.LogInformation($"Feedback of facility with id {t.Id} is updating");
            var user = customerRepository.FindById(t.Customer);
            if (user != null)
            {

                if (t.Status == FacilityStatus.Pending)
                {

                    t.Status = FacilityStatus.Active;
                    t.ModifiedDate = DateTime.Now;
                    context.Facilities.Update(t);
                    context.SaveChanges();

                    Feedback feedback = new Feedback();
                    feedback.RegistrationId = user.RegistrationId;
                    feedback.FeedBack = "Approved Successfully";

                    if (t.Type == FacilityType.DebitCard)
                    {
                        feedback.FeedbackType = FeedbackType.DebitCard;
                    }
                    else if (t.Type == FacilityType.CreditCard)
                    {
                        feedback.FeedbackType = FeedbackType.CreditCard;
                    }
                    else if (t.Type == FacilityType.ChequeBook)
                    {
                        feedback.FeedbackType = FeedbackType.ChequeBook;
                    }

                    feedback.AccountNumber = user.AccountNumber;
                    feedbackRepository.Add(feedback);

                    return t;
                }

                else if (t.Status == FacilityStatus.Active)
                {

                    t.Status = FacilityStatus.Inactive;
                    t.ModifiedDate = DateTime.Now;
                    context.Facilities.Update(t);
                    context.SaveChanges();

                    Feedback feedback = new Feedback();
                    feedback.RegistrationId = user.RegistrationId;
                    feedback.FeedBack = "Your Request for Deactivation is Successful";

                    if (t.Type == FacilityType.DebitCard)
                    {
                        feedback.FeedbackType = FeedbackType.DebitCard;
                    }
                    else if (t.Type == FacilityType.CreditCard)
                    {
                        feedback.FeedbackType = FeedbackType.CreditCard;
                    }
                    else if (t.Type == FacilityType.ChequeBook)
                    {
                        feedback.FeedbackType = FeedbackType.ChequeBook;
                    }

                    feedback.AccountNumber = user.AccountNumber;
                    feedbackRepository.Add(feedback);

                    return t;
                }
                else
                    throw new InvalidRequestException();
            }
            else
            {
                throw new UserNotFoundException($"user with id {t.Id}");

            }

        }
        public Facility UpdateStatus(int id)
        {
            log.LogInformation($"Status of facility with id {id} is updating");

            var t = FindById(id);

            if (t != null)
            {
                if (t.Status == FacilityStatus.Inactive)
                {
                    var user = customerRepository.FindById(t.Customer);
                    t.Status = FacilityStatus.Active;
                    t.ModifiedDate = DateTime.Now;
                    context.Facilities.Update(t);
                    context.SaveChanges();
                    Feedback feedback = new Feedback();
                    feedback.RegistrationId = user.RegistrationId;
                    feedback.FeedBack = "UnBlocked Successfully";
                    if (t.Type == FacilityType.DebitCard)
                    {
                        feedback.FeedbackType = FeedbackType.DebitCard;
                    }
                    else if (t.Type == FacilityType.CreditCard)
                    {
                        feedback.FeedbackType = FeedbackType.CreditCard;
                    }

                    feedback.AccountNumber = user.AccountNumber;
                    feedbackRepository.Add(feedback);
                }
                return t;
            }
            else
                throw new RequestNotFoundException($"Facility with id {id} was not found");
        }
    }
}
