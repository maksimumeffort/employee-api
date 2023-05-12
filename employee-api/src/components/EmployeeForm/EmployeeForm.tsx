import { useForm, Controller } from "react-hook-form";
import { useEffect, useState } from "react";
import { Radio, Space, Checkbox } from "antd";
import { NavLink } from "react-router-dom";
import styles from "./EmployeeForm.module.scss";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormSchema, FormInputs } from "../../interfaces/ValidationsAndTypes";
import { thisYear, todayDate } from "../../interfaces/ValidationsAndTypes";

export const EmployeeForm = ({ employee, onSubmit }: any) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
    reset,
  } = useForm<FormInputs>({
    defaultValues: employee,
    resolver: yupResolver(FormSchema),
  });

  const [isOngoing, setIsOngoing] = useState(employee.isOngoing);

  // useEffect to keep track of isOngoing

  // localDate useEffect
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
    // console.log(copy, "copy");
    reset(copy);
  }, [employee]);

  // addressr Api useEffect

  //TODO4: check if date specified is after current date
  // compile date as object

  const startDateProvided: Date = new Date(
    `${getValues("startYear")}-${getValues("startMonth")}-${getValues(
      "startDay"
    )}T10:20:30Z`
  );
  const finishDateProvided = new Date(
    `${getValues("finishYear")}-${getValues("finishMonth")}-${getValues(
      "finishDay"
    )}T10:20:30Z`
  );
  // work out the period of service

  var diff = Math.abs(
    finishDateProvided.getTime() - startDateProvided.getTime()
  );
  var diffDays = Math.ceil(diff / (1000 * 3600 * 24));

  // start date can't be greater than today's date
  // finish date can't be smaller than start date

  // console.log(!isNaN(finishDateProvided.getTime()));
  // should address be required?
  //TODO: listen to Calum

  return (
    <div>
      <section className={styles.HeadingSection}>
        <NavLink to={`/`}>&#10094; Back</NavLink>
        <h1>Employee details</h1>
      </section>

      <form className={styles.EmployeeForm} onSubmit={handleSubmit(onSubmit)}>
        <section className={styles.EmployeeFormPersonal}>
          <h2>Personal Information</h2>
          <h5>First Name</h5>
          {
            <input
              type="text"
              {...register("name", { minLength: 2, required: true })}
            />
          }
          <p>{errors.name?.message}</p>
          <h5>Middle Name (if applicable)</h5>
          {
            <input
              type="text"
              {...register("middleName", { minLength: 2, required: false })}
            />
          }
          <p>{errors.middleName?.message}</p>

          <h5>Last Name</h5>
          {
            <input
              type="text"
              {...register("lastName", { minLength: 2, required: true })}
            />
          }
          <p>{errors.lastName?.message}</p>
        </section>

        <section className={styles.EmployeeFormContact}>
          <h2>Contact Details</h2>
          <h5>Email address</h5>
          {
            <input
              type="email"
              {...register("email", { required: true })}
              className={styles.EmployeeFormContactEmail}
            />
          }
          <p>{errors.email?.message}</p>
          <h5>Mobile number</h5>
          <p>Must be an Australian number</p>
          <div className={styles.EmployeeFormContactMobile}>
            <div className={styles.EmployeeFormContactMobileDiv}>
              <h5>+61</h5>
            </div>
            <input
              type="tel"
              pattern="^0?[2,3,4,7,8][0-9]{8}$"
              {...register("mobile", { required: true })}
              className={styles.EmployeeFormContactMobileInput}
            />
          </div>

          <p>{errors.mobile?.message}</p>
          <h5>Residential address</h5>
          <p>Start typing to search</p>
          {
            <input
              type="text"
              {...register("address")}
              className={styles.EmployeeFormContactAddress}
            />
          }
          <p>{errors.address?.message}</p>
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
          <p>{errors.contractType?.message}</p>
          <h5>Start date</h5>
          {/* do I need validation for 31 February in this component? - Yes
          TODO wrap these input fields in controller
          1. */}
          <section>
            <Controller
              control={control}
              name="startDate"
              render={({ field }) => (
                <>
                  <input
                    type="number"
                    min="1"
                    max="31"
                    required
                    {...register("startDay")}
                  />
                  <select
                    required
                    {...register("startMonth")}
                    className={styles.DateSelect}
                    onChange={(e) => {
                      console.log(e);
                    }}
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
                  <input
                    required
                    type="number"
                    min={thisYear - 100}
                    max={thisYear}
                    {...register("startYear")}
                  />
                </>
                // todo1: get value for month
                // todo2: check for leap year
              )}
            />
          </section>
          <p>{errors.startDay?.message}</p>
          <p>{errors.startMonth?.message}</p>
          <p>{errors.startYear?.message}</p>

          <h5>Finish date</h5>
          <section>
            {
              <input
                type="number"
                min="1"
                max="31"
                {...register("finishDay")}
                disabled={isOngoing}
              />
            }
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
            {
              <input
                type="number"
                min={thisYear - 100}
                max={thisYear}
                {...register("finishYear")}
                disabled={isOngoing}
              />
            }
          </section>
          <p>{errors.finishDay?.message}</p>
          <p>{errors.finishMonth?.message}</p>
          <p>{errors.finishYear?.message}</p>

          <section className={styles.EmployeeFormOngoing}>
            {/* <Controller
              control={control}
              name="isOngoing"
              render={({ field }) => (
                <input
                  type="checkbox"
                  value={employee.isOngoing}
                  onChange={(e) => field.onChange(e.target.value)}
                  // this only changes ongoing to true, doesn't let me reset isOngoing after
                  // onChange={setIsOngoing()}
                />
              )}
            /> */}

            {
              <input
                type="checkbox"
                // defaultChecked={employee.isOngoing}
                {...register("isOngoing")}
                // this only changes isOngoing to true, doesn't let me reset isOngoing after
                // onChange={(e) => setIsOngoing(e.target.value)}
              />
            }
            <p>Ongoing</p>
          </section>
          <p>{errors.isOngoing?.message}</p>

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
          <p>{errors.workType?.message}</p>
          <h5>Hours Per Week</h5>
          {
            <input
              type="number"
              min={1}
              max={24 * 7}
              required
              {...register("hoursPerWeek")}
              className={styles.EmployeeFormStatusHours}
            />
          }
          <p>{errors.hoursPerWeek?.message}</p>
          <section className={styles.EmployeeFormButtons}>
            <button type="submit" className={styles.EmployeeFormButtonsSave}>
              Save
            </button>
            {/* stopPropagation on cancel button  */}
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
