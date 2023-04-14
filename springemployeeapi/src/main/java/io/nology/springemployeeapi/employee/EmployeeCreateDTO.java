package io.nology.springemployeeapi.employee;
import java.time.LocalDate;

public class EmployeeCreateDTO {
    
    // data fields

    private String name;
    private String middleName;
    private String lastName;
    private String contractType;
    private String workType;
    private String startDay;
    private String startMonth;
    private String startYear;
    private String finishDay;
    private String finishMonth;
    private String finishYear;
    private String email;
    private String mobile;
    private String address;
    private int hoursPerWeek;

    // constructor

    public EmployeeCreateDTO() {
    }

    public EmployeeCreateDTO(String name, String middleName, String lastName, String contractType,
     String workType, String startDay, String startMonth, String startYear,  String finishDay, String finishMonth, String finishYear, String email, String mobile, String address, int hoursPerWeek) {
        this.name = name;
        this.middleName = middleName;
        this.lastName = lastName;
        this.contractType = contractType;
        this.workType = workType;
        this.startDay = startDay;
        this.startMonth = startMonth;
        this.startYear = startYear;
        this.finishDay = finishDay;
        this.finishMonth = finishMonth;
        this.finishYear = finishYear;
        this.email = email;
        this.mobile = mobile;
        this.address = address;
        this.hoursPerWeek = hoursPerWeek;

    }

    // getters and setters

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
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

    public String getStartDay() {
        return startDay;
    }

    public void setStartDay(String startDay) {
        this.startDay = startDay;
    }

    public String getFinishDay() {
        return finishDay;
    }

    public void setFinishDay(String finishDay) {
        this.finishDay = finishDay;
    }    

    public String getStartMonth() {
        return startMonth;
    }

    public void setStartMonth(String startMonth) {
        this.startMonth = startMonth;
    }

    public String getStartYear() {
        return startYear;
    }

    public void setStartYear(String startYear) {
        this.startYear = startYear;
    }

    public String getFinishMonth() {
        return finishMonth;
    }

    public void setFinishMonth(String finishMonth) {
        this.finishMonth = finishMonth;
    }

    public String getFinishYear() {
        return finishYear;
    }

    public void setFinishYear(String finishYear) {
        this.finishYear = finishYear;
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

    public int getHoursPerWeek() {
        return hoursPerWeek;
    }

    public void setHoursPerWeek(int hoursPerWeek) {
        this.hoursPerWeek = hoursPerWeek;
    }

    
}
