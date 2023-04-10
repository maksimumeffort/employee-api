import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { EmployeeForm } from "../../components/EmployeeForm/EmployeeForm";

export const EmployeePage = () => {
  const { id } = useParams();
  const [employeeInfo, setEmployeeInfo] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: `http://localhost:8080/employees/${id}`,
      responseType: "stream",
      validateStatus: (status) => {
        return status >= 200 && status <= 302;
      },
    })
      .then((res) => {
        const json = JSON.parse(res.data);
        setEmployeeInfo(json);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const onSubmit = (data: any) => {
    axios
      .put(`http://localhost:8080/employees/${id}`, data)
      .then((res) => {
        alert(`Employee ${res.data.name} successfully added to database`);
      })
      .catch((err) => console.log(err));
  };

  console.log(employeeInfo, "info");

  return (
    <>
      <div>
        <EmployeeForm employee={employeeInfo} onSubmit={onSubmit} />
      </div>
    </>
  );
};
