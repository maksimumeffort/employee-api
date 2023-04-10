package io.nology.springemployeeapi.employee;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Column;
import javax.persistence.Id;


@Entity
public class Employee {
    
    // required columns

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String name;

    @Column
    private String middleName;

    @Column
    private String lastName;

    @Column
    private String contractType;

    @Column
    private String workType;

    @Column
    private String startDate;

    @Column
    private String finishDate;

    @Column
    private String email;

    @Column
    private String mobile;

    @Column
    private String address;

    @Column
    private int hoursPerWeek;

    // constructor

    public Employee() {
    }

    public Employee(String name, String middleName, String lastName, String contractType, String workType, String startDate, String finishDate, String email, String mobile, String address, Integer hoursPerWeek) {
        this.name = name;
        this.middleName = middleName;
        this.lastName = lastName;
        this.contractType = contractType;
        this.workType = workType;
        this.startDate = startDate;
        this.finishDate = finishDate;
        this.email = email;
        this.mobile = mobile;
        this.address = address;
        this.hoursPerWeek = hoursPerWeek;
    }
    
    // getters and setters

    public String getName() {
        return name;
    }

    public String setName( String name) {
        return this.name = name;
    }

    public Long getId() {
        return id;
    }

    public String getMiddleName() {
        return middleName;
    }

    public void setMiddleName(String middleName) {
        this.middleName = middleName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getContractType() {
        return contractType;
    }

    public void setContractType(String contractType) {
        this.contractType = contractType;
    }

    public String getWorkType() {
        return workType;
    }

    public void setWorkType(String workType) {
        this.workType = workType;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public Integer getHoursPerWeek() {
        return hoursPerWeek;
    }

    public void setHoursPerWeek(Integer hoursPerWeek) {
        this.hoursPerWeek = hoursPerWeek;
    }

    public String getStartDate() {
        return startDate;
    }

    public void setStartDate(String startDate) {
        this.startDate = startDate;
    }

    public String getFinishDate() {
        return finishDate;
    }

    public void setFinishDate(String finishDate) {
        this.finishDate = finishDate;
    }

    
}
