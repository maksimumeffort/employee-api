import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import { Input, Radio, Space } from "antd";
import type { RadioChangeEvent } from "antd";
import { NavLink } from "react-router-dom";
import styles from "./EmployeeForm.module.scss";
import { useState } from "react";

type Inputs = {
  name: string;
  middleName: string;
  lastName: string;
  contractType: string;
  workType: string;
  startDate: string;
  finishDate: string;
  email: string;
  mobile: string;
  address: string;
  hoursPerWeek: number;

  exampleRequired: string;
};

export const EmployeeForm = ({ employee, onSubmit }: any) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({});

  return (
    <div>
      <section className={styles.HeadingSection}>
        <NavLink to={`/`}>&#10094; Back</NavLink>
        <h1>Employee details</h1>
      </section>

      <form className={styles.EmployeeForm}>
        <section className={styles.EmployeeFormPersonal}>
          <h2>Personal Information</h2>
          <h5>First Name</h5>
          {<input defaultValue={employee.name} {...register("name")} />}
          <h5>Middle Name</h5>
          {
            <input
              defaultValue={employee.middleName}
              {...register("middleName")}
            />
          }
          <h5>Last Name</h5>
          {<input defaultValue={employee.lastName} {...register("lastName")} />}
        </section>

        <section className={styles.EmployeeFormContact}>
          <h2>Contact Details</h2>
          <h5>Email address</h5>
          {
            <input
              defaultValue={employee.email}
              {...register("email")}
              className={styles.EmployeeFormContactEmail}
            />
          }
          <h5>Mobile number</h5>
          {
            <input
              defaultValue={employee.mobile}
              {...register("mobile")}
              className={styles.EmployeeFormContactMobile}
            />
          }
          <h5>Residential address</h5>
          {
            <input
              defaultValue={employee.address}
              {...register("address")}
              className={styles.EmployeeFormContactAddress}
            />
          }
        </section>

        <section className={styles.EmployeeFormStatus}>
          <h2>Employee Status</h2>
          <h5>What is contract type?</h5>
          {
            <Controller
              control={control}
              name="contractType"
              render={({ field: { onChange, value } }) => (
                <Radio.Group
                  value={value || employee.contractType}
                  onChange={(e) => onChange(e.target.value)}
                >
                  <Space direction="vertical">
                    <Radio value={"permanent"}>Permanent</Radio>
                    <Radio value={"contract"}>Contract</Radio>
                  </Space>
                </Radio.Group>
              )}
            />
          }
          <h5>Start date</h5>
          {
            <input
              defaultValue={employee.lengthOfService}
              {...register("startDate")}
            />
          }
          <h5>Finish date</h5>
          {
            <input
              defaultValue={employee.lengthOfService}
              {...register("finishDate")}
            />
          }
          <h5>Is this on a full-time or part-time basis?</h5>
          {
            <Controller
              control={control}
              name="workType"
              render={({ field: { onChange, value } }) => (
                <Radio.Group
                  value={value || employee.workType}
                  onChange={(e) => onChange(e.target.value)}
                >
                  <Space direction="vertical">
                    <Radio value={"full-time"}>Full-time</Radio>
                    <Radio value={"part-time"}>Part-time</Radio>
                  </Space>
                </Radio.Group>
              )}
            />
          }
          <h5>Hours Per Week</h5>
          {
            <input
              defaultValue={employee.hoursPerWeek}
              {...register("hoursPerWeek")}
              className={styles.EmployeeFormStatusHours}
            />
          }
          <section className={styles.EmployeeFormButtons}>
            <button
              type="submit"
              onClick={handleSubmit(onSubmit)}
              className={styles.EmployeeFormButtonsSave}
            >
              Save
            </button>
            <button className={styles.EmployeeFormButtonsCancel}>
              <NavLink to={`/`}>Cancel</NavLink>
            </button>
          </section>
        </section>

        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}
      </form>
    </div>
  );
};
