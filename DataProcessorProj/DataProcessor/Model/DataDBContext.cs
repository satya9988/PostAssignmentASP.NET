using Microsoft.EntityFrameworkCore;

namespace DataProcessor.Model
{
    public class DataDBContext:DbContext
    {
        public DataDBContext(DbContextOptions<DataDBContext> options) : base(options) { }

        public DbSet<College> College { get; set; }

        public DbSet<Department> Department { get; set; }

        public DbSet<Classes> Classes { get; set; }

        public DbSet<Student> Students { get; set; }
    }
}
