package io.nology.springemployeeapi.employee;

public class EmployeeCreateDTO {
    
    // data fields

    private String name;
    private String middleName;
    private String lastName;
    private String contractType;
    private String workType;
    private int lengthOfService;
    private String email;
    private String mobile;
    private String address;
    private int hoursPerWeek;

    // constructor

    public EmployeeCreateDTO() {
    }

    public EmployeeCreateDTO(String name, String middleName, String lastName, String contractType,
     String workType, int lengthOfService, String email, String mobile, String address, int hoursPerWeek) {
        this.name = name;
        this.middleName = middleName;
        this.lastName = lastName;
        this.contractType = contractType;
        this.workType = workType;
        this.lengthOfService = lengthOfService;
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

    public int getLengthOfService() {
        return lengthOfService;
    }

    public void setLengthOfService(int lengthOfService) {
        this.lengthOfService = lengthOfService;
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
