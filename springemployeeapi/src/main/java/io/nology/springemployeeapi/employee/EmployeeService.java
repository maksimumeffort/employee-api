package io.nology.springemployeeapi.employee;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional

public class EmployeeService {
    
    // dependency injection
    @Autowired 
    private EmployeeRepository repository;

    // create new employee
    public Employee create(EmployeeCreateDTO data) {
        String cleanName = data.getName();
        Employee newEmployee = new Employee(cleanName);
        this.repository.save(newEmployee);
        return newEmployee;
    }

    // get all employees
    public List<Employee> getAll() {
        return this.repository.findAll();
    }

    // get specific employee by id
    public Optional<Employee> getById(Long id) {
        return this.repository.findById(id);
    }

    // delete specific employee by id
    public boolean delete(Long id) {
        Optional<Employee> maybeEmployee = this.getById(id);
        if (maybeEmployee.isEmpty()) {
            return false;
        }
        this.repository.delete(maybeEmployee.get());
        return true;
    }

    // update specific employee by id
    public Employee update(Long id, EmployeeCreateDTO data) {
        Optional<Employee> maybeEmployee = this.getById(id);
        if (maybeEmployee.isEmpty()) {
            this.create(data);
        }
        
        Employee employeeToUpdate = maybeEmployee.get();

        employeeToUpdate.setName(data.getName());
        this.repository.save(employeeToUpdate);
        return employeeToUpdate;
    }


}
