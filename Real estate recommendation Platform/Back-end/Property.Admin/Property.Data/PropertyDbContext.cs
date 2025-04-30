using Microsoft.EntityFrameworkCore;
using Properties.Admin;

namespace Properties.Data
{
    public class PropertyDbContext : DbContext
    {
        public DbSet<Request> Requests { get; set; }
        public DbSet<Query> Queries { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Property> Properties { get; set; }

        public DbSet<Shortlist> ShortLists { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            string conStr = "Integrated Security=SSPI; " +
               "Server=HMECL-0M1526387\\SQLEXPRESS;DataBase=FindMyHome; TrustServerCertificate=True";
            optionsBuilder.UseSqlServer(conStr);
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Image>()
                .Property(b => b.CreatedDate).HasDefaultValue(DateTime.Now);
            modelBuilder.Entity<User>()
                .HasQueryFilter(d => d.DeletedDate == null);
            modelBuilder.Entity<Property>()
                .HasQueryFilter(d => d.DeletedDate == null);
            modelBuilder.Entity<Agency>()
                .HasQueryFilter(d => d.DeletedDate == null);
            modelBuilder.Entity<Image>()
                .HasQueryFilter(d => d.DeletedDate == null);
            modelBuilder.Entity<Query>()
                .HasQueryFilter(d => d.DeletedDate == null);
            modelBuilder.Entity<Request>()
               .HasQueryFilter(d => d.DeletedDate == null);
            modelBuilder.Entity<Shortlist>()
             .HasQueryFilter(d => d.DeletedDate == null);
        }
    }
}