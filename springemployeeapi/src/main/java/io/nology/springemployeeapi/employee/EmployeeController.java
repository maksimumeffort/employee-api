package io.nology.springemployeeapi.employee;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
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

    // add employee
    @PostMapping
    public ResponseEntity<Employee> create(@RequestBody EmployeeCreateDTO data) {
        Employee createdEmployee = this.service.create(data);
        return new ResponseEntity<>(createdEmployee, HttpStatus.CREATED);
    }
}
