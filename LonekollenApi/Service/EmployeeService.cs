using Microsoft.AspNetCore.Mvc.TagHelpers;

namespace LonekollenApi;

public class EmployeeService
{
    private readonly List<Employee> employees =
   [
       new Employee { Id = 1, Namn = "Anna Svensson", Roll = "Lönekonsult", Lon = 42000 },
        new Employee { Id = 2, Namn = "Erik Berg", Roll = "Utvecklare", Lon = 48000 },
        new Employee { Id = 3, Namn = "Sara Lind", Roll = "HR-specialist", Lon = 39000 },
    ];

    public List<Employee> GetAll() => employees;
    public Employee? GetEmployeeById(int id)
    {
        return employees.FirstOrDefault(employee => employee.Id == id);
    }

}
