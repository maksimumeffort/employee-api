import { useForm, Controller, DefaultValues } from "react-hook-form";
import { useEffect, useState } from "react";
import { Select, Radio, Space, Checkbox } from "antd";
import type { RadioChangeEvent } from "antd";
import { NavLink } from "react-router-dom";
import styles from "./EmployeeForm.module.scss";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type Inputs = {
  name: string;
  middleName: string;
  lastName: string;
  contractType: string;
  workType: string;
  startDay: string | null;
  startMonth: string | null;
  startYear: string | null;
  finishDay: string | null;
  finishMonth: string | null;
  finishYear: string | null;
  isOngoing: boolean;
  email: string;
  mobile: string;
  address: string;
  hoursPerWeek: number;
  exampleRequired: string;
};

const { Option } = Select;

export const EmployeeForm = ({ employee, onSubmit }: any) => {
  const thisYear = +new Date().toString().split(" ")[3];

  // phone number can start with 0, or with 3/2 and so on.
  const phoneRegExp = /^0?[2,3,4,7,8][0-9]{8}$/;

  const schema = yup.object().shape({
    name: yup.string().required(),
    middleName: yup.string().optional(),
    lastName: yup.string().required(),
    contractType: yup.string().required(),
    workType: yup.string().required(),
    startDay: yup.number().required(),
    startMonth: yup.number().required(),
    startYear: yup.number().required(),
    finalDay: yup.number().optional(),
    finalMonth: yup.number().optional(),
    finalYear: yup.number().optional(),
    isOngoing: yup.boolean().required(),
    email: yup.string().email().required(),
    mobile: yup
      .string()
      .matches(phoneRegExp, "Phone number is not valid")
      .required(),
    // not sure if that is all validation required for address
    address: yup.string(),
    hoursPerWeek: yup
      .number()
      .min(1)
      .max(24 * 7)
      .required(),
  });

  // console.log(thisYear);

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
  } = useForm<Inputs>({
    defaultValues: employee,
    resolver: yupResolver(schema),
  });

  const [isOngoing, setIsOngoing] = useState(employee.isOngoing);
  const switchIsOngoing = (event: any) => {
    setIsOngoing(event.target.checked);
  };

  let startDateArray = employee.startDate ? employee.startDate.split("-") : [];
  let finishDateArray = employee.finishDate
    ? employee.finishDate.split("-")
    : [];

  //TODO1: finish date is optional
  //TODO2: listen to Calum
  //TODO3: if Ongoing is selected ? no finish date required : finish date required
  //TODO4: check if date specified is after current date
  // convert string into number for start and end date

  // console.log(finishDateArray[1] == "02");
  // console.log(getValues("name"));

  useEffect(() => {
    reset(employee);
  }, [employee]);

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
            {<input value={startDateArray[2]} {...register("startDay")} />}
            {
              <Controller
                control={control}
                name="startMonth"
                render={({ field }) => (
                  <Select
                    {...field}
                    value={startDateArray[1]}
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

            {<input value={startDateArray[0]} {...register("startYear")} />}
          </section>

          <h5>Finish date</h5>
          <section>
            {
              <input
                value={finishDateArray[1]}
                disabled={isOngoing}
                {...register("finishDay")}
              />
            }
            {
              <Controller
                control={control}
                name="finishMonth"
                render={({ field }) => (
                  <Select
                    {...field}
                    value={finishDateArray[1]}
                    disabled={isOngoing}
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
                value={finishDateArray[0]}
                disabled={isOngoing}
                {...register("finishYear")}
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
