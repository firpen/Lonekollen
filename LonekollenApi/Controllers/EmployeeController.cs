using Microsoft.AspNetCore.Mvc;
using System.Runtime.Versioning;

namespace LonekollenApi;

[ApiController]
[Route("api/[controller]")]
public class EmployeeController(EmployeeService employeeService) : ControllerBase
{
    [HttpGet]
    public ActionResult<List<Employee>> GetEmployees()
    {
        return employeeService.GetAll();
    }

    [HttpGet("{id:int}")]
    public ActionResult<Employee> GetEmployee(int id)
    {
        Employee? employee = employeeService.GetEmployeeById(id);
        if (employee == null)
        {
            return NotFound();
        }
        return employee;
    }


}
