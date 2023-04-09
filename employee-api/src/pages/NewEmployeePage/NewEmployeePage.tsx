import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { EmployeeForm } from "../../containers/EmployeeForm/EmployeeForm";

export const NewEmployeePage = () => {
  const employeeInfo: any = [];

  const onSubmit = (data: any) => {
    console.log(data, "before axios");
    axios
      .post("http://localhost:8080/employees", data)
      .then((res) => {
        // console.log(res.data, "after axios");
        alert(`Employee ${res.data.name} successfully added to database`);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div>
        <EmployeeForm employee={employeeInfo} onSubmit={onSubmit} />
      </div>
    </>
  );
};
