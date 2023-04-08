package io.nology.springemployeeapi.employee;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional

public class EmployeeService {
    
    // dependency injection
    @Autowired 
    private EmployeeRepository repository;

    public Employee create(EmployeeCreateDTO data) {
        String cleanName = data.getName();
        Employee newEmployee = new Employee(cleanName);
        this.repository.save(newEmployee);
        return newEmployee;
    }

    public List<Employee> getAll() {
        return this.repository.findAll();
    }

    
}
