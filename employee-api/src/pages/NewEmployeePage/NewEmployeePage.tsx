import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { EmployeeForm } from "../../components/EmployeeForm/EmployeeForm";
import { DefaultValues } from "../../interfaces/DefaultValues";

export const NewEmployeePage = () => {
  const employeeInfo: any = [];
  let navigate = useNavigate();
  const goHome = () => {
    navigate("/");
  };

  const onSubmit = (data: any) => {
    console.log(data, "before axios");
    axios
      .post("http://localhost:8080/employees", data)
      .then((res) => {
        console.log(res.data, "after axios");
        alert(`Employee ${res.data.name} successfully added to database`);
      })
      .catch((err) => console.log(err));
    goHome();
  };

  return (
    <>
      <div>
        <EmployeeForm employee={DefaultValues} onSubmit={onSubmit} />
      </div>
    </>
  );
};
