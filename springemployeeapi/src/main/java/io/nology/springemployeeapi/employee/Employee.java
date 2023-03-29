package io.nology.springemployeeapi.employee;


public class Employee {
    // only need name and id
    private String name;
    public final Integer id;
    public static Integer counter = 0;

    public Employee( String name) {
        this.name = name;
        this.id = ++counter;
    }

    public String getName() {
        return name;
    }


}
