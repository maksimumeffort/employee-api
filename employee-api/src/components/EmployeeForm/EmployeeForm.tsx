import { useForm, Controller } from "react-hook-form";
import { useEffect, useState } from "react";
import { Select, Radio, Space, Checkbox } from "antd";
import { NavLink } from "react-router-dom";
import styles from "./EmployeeForm.module.scss";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormSchema, FormInputs } from "../../interfaces/ValidationsAndTypes";

const { Option } = Select;

export const EmployeeForm = ({ employee, onSubmit }: any) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
  } = useForm<FormInputs>({
    defaultValues: employee,
    resolver: yupResolver(FormSchema),
  });

  // date values and states

  const [startDay, setStartDay] = useState("");
  const [startMonth, setStartMonth] = useState("");
  const [startYear, setStartYear] = useState("");
  const [finishDay, setFinishDay] = useState("");
  const [finishMonth, setFinishMonth] = useState("");
  const [finishYear, setFinishYear] = useState("");

  const handleStartDayChange = (event: any) => {
    setStartDay(event);
  };
  const handleStartMonthChange = (event: any) => {
    setStartMonth(event);
  };
  const handleStartYearChange = (event: any) => {
    setStartYear(event);
  };
  const handleFinishDayChange = (event: any) => {
    setFinishDay(event);
  };
  const handleFinishMonthChange = (event: any) => {
    setFinishMonth(event);
  };
  const handleFinishYearChange = (event: any) => {
    setFinishYear(event);
  };

  const [isOngoing, setIsOngoing] = useState(employee.isOngoing);
  // const switchIsOngoing = (event: any) => {
  //   setIsOngoing(event.target.checked);
  // };

  useEffect(() => {
    reset(employee);
    if (employee) {
      setStartDay(employee.startDate ? employee.startDate.split("-")[2] : "");
      setStartMonth(employee.startDate ? employee.startDate.split("-")[1] : "");
      setStartYear(employee.startDate ? employee.startDate.split("-")[0] : "");
      setFinishDay(
        employee.finishDate ? employee.finishDate.split("-")[2] : ""
      );
      setFinishMonth(
        employee.finishDate ? employee.finishDate.split("-")[1] : ""
      );
      setFinishYear(
        employee.finishDate ? employee.finishDate.split("-")[0] : ""
      );
    }
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
          {
            <input
              // defaultValue={employee.middleName}
              {...register("middleName")}
            />
          }
          <h5>Last Name</h5>
          {
            <input
              // defaultValue={employee.lastName}
              {...register("lastName", { minLength: 2 })}
            />
          }
          <p>{errors.lastName?.message}</p>
        </section>

        <section className={styles.EmployeeFormContact}>
          <h2>Contact Details</h2>
          <h5>Email address</h5>
          {
            <input
              // defaultValue={employee.email}
              {...register("email")}
              className={styles.EmployeeFormContactEmail}
            />
          }
          <p>{errors.email?.message}</p>
          <h5>Mobile number</h5>
          {
            <input
              // defaultValue={employee.mobile}
              {...register("mobile")}
              className={styles.EmployeeFormContactMobile}
            />
          }
          <p>{errors.mobile?.message}</p>
          <h5>Residential address</h5>
          {
            <input
              // defaultValue={employee.address}
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
                  // defaultValue={employee.contractType}
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
            {
              <input
                name="startDay"
                value={startDay}
                onChange={(e) => handleStartDayChange(e.target.value)}
              />
            }
            {
              <Controller
                control={control}
                name="startMonth"
                render={({ field }) => (
                  <Select
                    {...field}
                    value={startMonth}
                    onChange={(e) => handleStartMonthChange(e)}
                    // defaultValue={employee.startMonth || startDateArray[1]}
                    className={styles.DateSelect}
                  >
                    <Option value="01">January</Option>
                    <Option value="02">February</Option>
                    <Option value="03">March</Option>
                    <Option value="04">April</Option>
                    <Option value="05">May</Option>
                    <Option value="06">June</Option>
                    <Option value="07">July</Option>
                    <Option value="08">August</Option>
                    <Option value="09">September</Option>
                    <Option value="10">October</Option>
                    <Option value="11">November</Option>
                    <Option value="12">December</Option>
                  </Select>
                )}
              />
            }
            {
              <input
                name="startYear"
                value={startYear}
                onChange={(e) => handleStartYearChange(e.target.value)}
              />
            }
          </section>

          <h5>Finish date</h5>
          <section>
            {
              <input
                name="finishDay"
                disabled={isOngoing}
                value={finishDay}
                onChange={(e) => handleFinishDayChange(e.target.value)}
              />
            }

            {
              <Controller
                control={control}
                name="finishMonth"
                render={({ field }) => (
                  <Select
                    {...field}
                    value={finishMonth}
                    disabled={isOngoing}
                    className={styles.DateSelect}
                    onChange={(e) => handleFinishMonthChange(e)}
                  >
                    <Option value="01">January</Option>
                    <Option value="02">February</Option>
                    <Option value="03">March</Option>
                    <Option value="04">April</Option>
                    <Option value="05">May</Option>
                    <Option value="06">June</Option>
                    <Option value="07">July</Option>
                    <Option value="08">August</Option>
                    <Option value="09">September</Option>
                    <Option value="10">October</Option>
                    <Option value="11">November</Option>
                    <Option value="12">December</Option>
                  </Select>
                )}
              />
            }
            {
              <input
                name="finishYear"
                disabled={isOngoing}
                value={finishYear}
                onChange={(e) => handleFinishYearChange(e.target.value)}
              />
            }
          </section>

          <section className={styles.EmployeeFormOngoing}>
            {
              <Controller
                control={control}
                name="isOngoing"
                render={({ field: { value, onChange } }) => (
                  <Checkbox
                    checked={value}
                    // defaultChecked={employee.isOngoing}
                    onChange={(e) => {
                      onChange(e.target.checked);
                      setIsOngoing(e.target.checked);
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
                  // defaultValue={employee.workType}
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
              // defaultValue={employee.hoursPerWeek}
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
