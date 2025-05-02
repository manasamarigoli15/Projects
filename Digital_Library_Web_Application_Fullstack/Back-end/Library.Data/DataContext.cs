using Library.Data.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Library.Data
{
    public class DataContext : DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<Book> Books { get; set; }
        public DbSet<BookRental> BookRentals { get; set; }
        public DbSet<UserRental> UserRentals { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            string conStr = "Integrated Security=SSPI; " +
               "Server=HMECL-0M1526387\\SQLEXPRESS;DataBase=DigitalLibrary; TrustServerCertificate=True";
            optionsBuilder.UseSqlServer(conStr);
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Book>()
                .HasQueryFilter(d => d.DeletedDate == null);
            modelBuilder.Entity<BookRental>()
                .HasQueryFilter(d => d.DeletedDate == null);
            modelBuilder.Entity<User>()
                .HasQueryFilter(d => d.DeletedDate == null);
            modelBuilder.Entity<UserRental>()
                .HasQueryFilter(d => d.DeletedDate == null);
        }
    }
}
