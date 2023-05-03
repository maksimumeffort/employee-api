package io.nology.springemployeeapi.employee;

import java.time.LocalDate;
import java.util.Arrays;
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

        // String cleanStartMonth = Arrays.asList("10", "11", "12").contains(data.getStartMonth()) ? data.getStartMonth() : String.format("0%s", data.getStartMonth());

        // String cleanFinishMonth = Arrays.asList("10", "11", "12").contains(data.getFinishMonth()) ? data.getFinishMonth() : String.format("0%s", data.getFinishMonth());
        
        
        LocalDate startDate = LocalDate.parse(data.getStartYear() + "-" + data.getStartMonth() + "-" + data.getStartDay());
        LocalDate finishDate = LocalDate.parse(data.getFinishYear() + "-" + data.getFinishMonth() + "-" + data.getFinishDay());

        Employee newEmployee = new Employee(cleanName, 
        data.getMiddleName(), data.getLastName(), data.getContractType(), data.getWorkType(), startDate, finishDate, data.getIsOngoing(), data.getEmail(), data.getMobile(), data.getAddress(), data.getHoursPerWeek());
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

        String cleanStartMonth = Arrays.asList("10", "11", "12").contains(data.getStartMonth()) ? data.getStartMonth() : String.format("0%s", data.getStartMonth());

        LocalDate startDate = LocalDate.parse(data.getStartYear() + "-" + cleanStartMonth + "-" + data.getStartDay());
        LocalDate finishDate = LocalDate.parse(data.getFinishYear() + "-" + data.getFinishMonth() + "-" + data.getFinishDay());
        
        Employee employeeToUpdate = maybeEmployee.get();

        // setting new values
        employeeToUpdate.setName(data.getName());
        employeeToUpdate.setMiddleName(data.getMiddleName());
        employeeToUpdate.setLastName(data.getLastName());
        employeeToUpdate.setContractType(data.getContractType());
        employeeToUpdate.setWorkType(data.getWorkType());
        employeeToUpdate.setStartDate(startDate);
        employeeToUpdate.setFinishDate(finishDate);
        employeeToUpdate.setOngoing(data.getIsOngoing());
        employeeToUpdate.setEmail(data.getEmail());
        employeeToUpdate.setMobile(data.getMobile());
        employeeToUpdate.setAddress(data.getAddress());
        employeeToUpdate.setHoursPerWeek(data.getHoursPerWeek());
        
        // saving new values
        this.repository.save(employeeToUpdate);
        return employeeToUpdate;
    }


}
