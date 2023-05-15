package io.nology.springemployeeapi.employee;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

import java.time.LocalDate;

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

    @Column(name="start_date", columnDefinition = "DATE")
    private LocalDate startDate;

    @Column(name="finish_date", columnDefinition = "DATE")
    private LocalDate finishDate;

    @Column
    private Boolean isOngoing;

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

    public Employee(String name, String middleName, String lastName, String contractType, String workType, LocalDate startDate, LocalDate finishDate, boolean isOngoing, String email, String mobile, String address, Integer hoursPerWeek) {
        this.name = name;
        this.middleName = middleName;
        this.lastName = lastName;
        this.contractType = contractType;
        this.workType = workType;
        this.startDate = startDate;
        this.finishDate = finishDate;
        this.isOngoing = isOngoing;
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

    public LocalDate getStartDate() {
        return startDate;
    }

    public void setStartDate(LocalDate startDate) {
        this.startDate = startDate;
    }

    public LocalDate getFinishDate() {
        return finishDate;
    }

    public void setFinishDate(LocalDate finishDate) {
        this.finishDate = finishDate;
    }

    public boolean getIsOngoing() {
        return isOngoing;
    }

    public void setIsOngoing(boolean isOngoing) {
        this.isOngoing = isOngoing;
    }
    
}
