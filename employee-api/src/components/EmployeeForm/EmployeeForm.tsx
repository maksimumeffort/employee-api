import { useForm, Controller } from "react-hook-form";
import { useEffect, useState } from "react";
import { Radio, Space, Checkbox } from "antd";
import { NavLink } from "react-router-dom";
import styles from "./EmployeeForm.module.scss";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormSchema, FormInputs } from "../../interfaces/ValidationsAndTypes";

export const EmployeeForm = ({ employee, onSubmit }: any) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm<FormInputs>({
    defaultValues: employee,
    resolver: yupResolver(FormSchema),
  });

  const [isOngoing, setIsOngoing] = useState(employee.isOngoing);
  // const switchIsOngoing = (event: any) => {
  //   setIsOngoing(event.target.checked);
  // };

  useEffect(() => {
    let copy = { ...employee };
    const [startYear, startMonth, startDay] =
      employee.startDate?.split("-") ?? "";
    const [finishYear, finishMonth, finishDay] =
      employee.finishDate?.split("-") ?? "";
    copy = {
      ...copy,
      startYear,
      startMonth,
      startDay,
      finishYear,
      finishMonth,
      finishDay,
    };
    console.log(copy, "copy");
    reset(copy);
  }, [employee]);

  //TODO1: finish date is optional
  //TODO2: listen to Calum
  //TODO3: if Ongoing is selected ? no finish date required : finish date required
  //TODO4: check if date specified is after current date

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
          {
            <input
              // defaultValue={employee.name}
              {...register("name", { minLength: 2 })}
            />
          }
          <p>{errors.name?.message}</p>
          <h5>Middle Name (if applicable)</h5>
          {<input {...register("middleName")} />}
          <h5>Last Name</h5>
          {<input {...register("lastName", { minLength: 2 })} />}
          <p>{errors.lastName?.message}</p>
        </section>

        <section className={styles.EmployeeFormContact}>
          <h2>Contact Details</h2>
          <h5>Email address</h5>
          {
            <input
              {...register("email")}
              className={styles.EmployeeFormContactEmail}
            />
          }
          <p>{errors.email?.message}</p>
          <h5>Mobile number</h5>
          {
            <input
              {...register("mobile")}
              className={styles.EmployeeFormContactMobile}
            />
          }
          <p>{errors.mobile?.message}</p>
          <h5>Residential address</h5>
          {
            <input
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
                  value={value}
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
          <section>
            {<input {...register("startDay")} />}
            {
              <select {...register("startMonth")} className={styles.DateSelect}>
                <option value="01">January</option>
                <option value="02">February</option>
                <option value="03">March</option>
                <option value="04">April</option>
                <option value="05">May</option>
                <option value="06">June</option>
                <option value="07">July</option>
                <option value="08">August</option>
                <option value="09">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
              </select>
            }

            {<input {...register("startYear")} />}
          </section>

          <h5>Finish date</h5>
          <section>
            {<input {...register("finishDay")} disabled={isOngoing} />}

            {
              <select
                {...register("finishMonth")}
                className={styles.DateSelect}
              >
                <option value="01">January</option>
                <option value="02">February</option>
                <option value="03">March</option>
                <option value="04">April</option>
                <option value="05">May</option>
                <option value="06">June</option>
                <option value="07">July</option>
                <option value="08">August</option>
                <option value="09">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
              </select>
            }
            {<input {...register("finishYear")} disabled={isOngoing} />}
          </section>

          <section className={styles.EmployeeFormOngoing}>
            {
              <Controller
                control={control}
                name="isOngoing"
                render={({ field: { value, onChange } }) => (
                  <Checkbox
                    checked={value}
                    onChange={(e) => {
                      onChange(e.target.checked);
                      setIsOngoing(e.target.checked);
                      setValue("finishDay", "00");
                      setValue("finishMonth", "00");
                      setValue("finishYear", "00");
                    }}
                  />
                )}
              />
            }
            <p>Ongoing</p>
          </section>

          <h5>Is this on a full-time or part-time basis?</h5>
          {
            <Controller
              control={control}
              name="workType"
              render={({ field: { onChange, value } }) => (
                <Radio.Group
                  value={value}
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
              {...register("hoursPerWeek")}
              className={styles.EmployeeFormStatusHours}
            />
          }
          <p>{errors.hoursPerWeek?.message}</p>
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
