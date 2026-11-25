using LonekollenApi.Data;

namespace LonekollenApi;

public class EmployeeService
{

    private readonly LonekollenDbContext _db;

    public EmployeeService(LonekollenDbContext db)
    {
        _db = db;
    }

    public List<Employee> GetAll() => _db.Employees.ToList();
    public Employee? GetEmployeeById(int id)
    {
        return _db.Employees.FirstOrDefault(employee => employee.Id == id);
    }

}
