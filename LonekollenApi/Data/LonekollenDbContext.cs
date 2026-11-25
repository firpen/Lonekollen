using Microsoft.EntityFrameworkCore;

namespace LonekollenApi.Data;

public class LonekollenDbContext : DbContext
{
    public LonekollenDbContext(DbContextOptions<LonekollenDbContext> options)
        : base(options)
    {
    }

    public DbSet<Employee> Employees => Set<Employee>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Employee>().HasData(
        new Employee { Id = 1, Namn = "Anna Svensson", Roll = "Lönekonsult", Lon = 42000 },
        new Employee { Id = 2, Namn = "Erik Berg", Roll = "Utvecklare", Lon = 48000 },
        new Employee { Id = 3, Namn = "Sara Lind", Roll = "HR-specialist", Lon = 39000 }
        );
    }
}