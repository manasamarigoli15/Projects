using Bank.Customer;
using Microsoft.EntityFrameworkCore;

namespace Bank.Customer.Data
{
    public class BankDbContext : DbContext
    {
        public DbSet<Customers> Customers { get; set; }
        public DbSet<Loan> Loan { get; set; }
        public DbSet<FundTransaction> Transactions { get; set; }
        public DbSet<Feedback> Feedbacks { get; set; }
        public DbSet<Facility> Facilities { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            string conStr = "Integrated Security = SSPI;" + @"Server=.;DataBase=MyBankPortal;TrustServerCertificate=True;";
            optionsBuilder.UseSqlServer(conStr);
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Customers>()
                .HasQueryFilter(d => d.DeletedDate == null);
            modelBuilder.Entity<Loan>()
                .HasQueryFilter(d => d.DeletedDate == null);
            modelBuilder.Entity<FundTransaction>()
                .HasQueryFilter(d => d.DeletedDate == null);//.HasKey(d => new { d.Id, d.AccountNumber });
            modelBuilder.Entity<Facility>()
                .HasQueryFilter(d => d.DeletedDate == null);
            modelBuilder.Entity<Feedback>()
               .HasQueryFilter(d => d.DeletedDate == null);
        }
        //public override int SaveChanges()
        //{
        //    var entries = ChangeTracker
        //        .Entries()
        //        .Where(e => e.Entity is BaseObject && (
        //                e.State == EntityState.Added
        //                || e.State == EntityState.Modified));

        //    foreach (var entityEntry in entries)
        //    {
        //        ((BaseObject)entityEntry.Entity).ModifiedDate = DateTime.Now;
        //        ((BaseObject)entityEntry.Entity).Status = Status.Active;

        //        if (entityEntry.State == EntityState.Added)
        //        {
        //            ((BaseObject)entityEntry.Entity).CreatedDate = DateTime.Now;
        //            ((BaseObject)entityEntry.Entity).Status = Status.Pending;
        //        }
        //    }

        //    return base.SaveChanges();
        //}

    }
}

