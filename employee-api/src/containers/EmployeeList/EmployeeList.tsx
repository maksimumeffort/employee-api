import EmployeeCard from "../../components/EmployeeCard/EmployeeCard";

import axios from "axios";
import { useState, useEffect } from "react";

export const EmployeeList = () => {
  const [employeesInDb, setEmployeesInDb] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:8080/employees",
      responseType: "stream",
    }).then((res) => {
      const json = JSON.parse(res.data);
      setEmployeesInDb(json);
    });
  }, []);

  console.log(`${typeof employeesInDb} employees in database`);

  return (
    <>
      <div className={"styles"}>
        {employeesInDb.map((employee: any) => {
          return <EmployeeCard key={employee.id} employee={employee} />;
        })}
      </div>
    </>
  );
};

export default EmployeeList;
