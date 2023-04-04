import http from "../http-common";

class EmployeeDataService {
  getAll() {
    return http.get("/employees");
  }

  //   get(id) {
  //     return http.get(`/employees/${id}`);
  //   }

  create(data) {
    return http.post("/employees", data);
  }
}

export default new EmployeeDataService();
