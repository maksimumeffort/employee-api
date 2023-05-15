package io.nology.springemployeeapi.employee;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping("/employees")
public class EmployeeController {
    
    // dependency injection pattern
    @Autowired
    EmployeeService service;

    // create employee
    @PostMapping
    public ResponseEntity<Employee> create(@RequestBody EmployeeCreateDTO data) {
        Employee createdEmployee = this.service.create(data);
        // System.out.println("____________");
        return new ResponseEntity<>(createdEmployee, HttpStatus.CREATED);
    }

    // get employees
    @GetMapping
    public ResponseEntity<List<Employee>> getAll() {
        List<Employee> allEmployees = this.service.getAll();
        return new ResponseEntity<>(allEmployees, HttpStatus.OK);
    }
    
    // get employee by id
    @GetMapping("/{id}")
    public ResponseEntity<Employee> getById(@PathVariable Long id) {
        Optional<Employee> maybeEmployee = this.service.getById(id);

        if (maybeEmployee.isEmpty()) {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<>(maybeEmployee.get(), HttpStatus.FOUND);
    }

    // delete employee by id
    @DeleteMapping("/{id}")
    public ResponseEntity<Employee> delete(@PathVariable Long id) {
        boolean isDeleted = this.service.delete(id);
        if (isDeleted) {
            return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
        }

        return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
    }
    
    //update employee by id
    @PostMapping("/{id}")
    public ResponseEntity<Employee> update(@PathVariable Long id, @RequestBody EmployeeCreateDTO data) {
        Employee updatedEmployee = this.service.update(id, data);
        return new ResponseEntity<Employee>(updatedEmployee, HttpStatus.OK);
    }
}
