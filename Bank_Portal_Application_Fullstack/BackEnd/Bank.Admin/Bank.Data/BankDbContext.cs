using Bank.Admin;
using Microsoft.EntityFrameworkCore;

namespace Bank.Data
{
    public class BankDbContext : DbContext
    {
        public DbSet<Admins> Admins { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            string conStr = "Integrated Security = SSPI;" + @"Server=.;DataBase=MyBankPortal;TrustServerCertificate=True;";
            optionsBuilder.UseSqlServer(conStr);
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Admins>()
                .HasQueryFilter(d => d.DeletedDate == null);
        }

    }
}

