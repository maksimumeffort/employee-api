import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { EmployeeForm } from "../../components/EmployeeForm/EmployeeForm";

export const EmployeePage = () => {
  const { id } = useParams();
  const [employeeInfo, setEmployeeInfo] = useState([]);
  let navigate = useNavigate();
  const goHome = () => {
    navigate("/");
  };

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

  // const { startYear, startMonth, startDay } = data;
  // [startYear, startMonth, startDay].join("-");

  const onSubmit = (data: any) => {
    axios
      .put(`http://localhost:8080/employees/${id}`, data)
      .then((res) => {
        console.log(res.data);
        alert(`Employee ${res.data.name} successfully added to database`);
      })
      .catch((err) => console.log(err));
    goHome();
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
