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
        String cleanName = data.getName().toLowerCase();
        Employee newEmployee = new Employee(cleanName, 
        data.getMiddleName(), data.getLastName(), data.getContractType(), data.getWorkType(), data.getLengthOfService(), data.getEmail(), data.getMobile(), data.getAddress(), data.getHoursPerWeek());
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

        // setting new values
        employeeToUpdate.setName(data.getName());
        employeeToUpdate.setMiddleName(data.getMiddleName());
        employeeToUpdate.setLastName(data.getLastName());
        employeeToUpdate.setContractType(data.getContractType());
        employeeToUpdate.setWorkType(data.getWorkType());
        employeeToUpdate.setLengthOfService(data.getLengthOfService());
        employeeToUpdate.setEmail(data.getEmail());
        employeeToUpdate.setMobile(data.getMobile());
        employeeToUpdate.setAddress(data.getAddress());
        employeeToUpdate.setHoursPerWeek(data.getHoursPerWeek());
        
        // saving new values
        this.repository.save(employeeToUpdate);
        return employeeToUpdate;
    }


}
