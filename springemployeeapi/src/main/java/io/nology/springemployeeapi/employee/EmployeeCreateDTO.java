package io.nology.springemployeeapi.employee;

public class EmployeeCreateDTO {
    
    private String name;

    public EmployeeCreateDTO() {
    }

    public EmployeeCreateDTO(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }
}
