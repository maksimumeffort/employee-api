package io.nology.springemployeeapi.employee;

import java.util.ArrayList;
import java.util.Arrays;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/employees")
public class EmployeeController {
    
    // create dummy employees
    public ArrayList<Employee> employees = new ArrayList<>(
            Arrays.asList(new Employee("Alex"), new Employee("Joe"), new Employee("Alice")));

    // get all employees
    @GetMapping
    public ResponseEntity<ArrayList<Employee>> getAll() {
        return new ResponseEntity<>(this.employees, HttpStatus.OK);
    }

    // add employee
    @PostMapping
    public ResponseEntity<Employee> create(@RequestBody EmployeeCreateDTO data) {
        // get name from DTO & create consultant using this data
        Employee newEmployee = new Employee(data.getName());
        // add it to static data list
        this.employees.add(newEmployee);
        // return response entity
        return new ResponseEntity<Employee>(newEmployee, HttpStatus.CREATED);
    }
}
