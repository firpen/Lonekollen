using Microsoft.EntityFrameworkCore;

namespace LonekollenApi.Data;

public class LonekollenDbContext : DbContext
{
    public LonekollenDbContext(DbContextOptions<LonekollenDbContext> options)
        : base(options)
    {
    }

    public DbSet<Employee> Employees => Set<Employee>();
}