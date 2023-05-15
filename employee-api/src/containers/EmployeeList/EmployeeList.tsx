import EmployeeCard from "../../components/EmployeeCard/EmployeeCard";

import axios from "axios";
import { useState, useEffect } from "react";

export const EmployeeList = () => {
  const [employeesInDb, setEmployeesInDb] = useState([]);
  const [deleteEmployee, setDeleteEmployee] = useState(false);

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:8080/employees",
      responseType: "stream",
    }).then((res) => {
      const json = JSON.parse(res.data);
      setEmployeesInDb(json);
    });
  }, [employeesInDb]);

  return (
    <>
      <div className={"styles"}>
        {employeesInDb.map((employee: any) => {
          // console.log(employee);
          return (
            <EmployeeCard
              key={employee.id}
              employee={employee}
              setDeleteEmployee={setDeleteEmployee}
            />
          );
        })}
      </div>
    </>
  );
};

export default EmployeeList;
