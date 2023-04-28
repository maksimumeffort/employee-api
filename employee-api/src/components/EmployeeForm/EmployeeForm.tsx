import { useForm, Controller } from "react-hook-form";
import { Input, Select, Radio, Space, Checkbox } from "antd";
import type { RadioChangeEvent } from "antd";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "./EmployeeForm.module.scss";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type Inputs = {
  name: string;
  middleName: string;
  lastName: string;
  contractType: string;
  workType: string;
  startDay: number | null;
  startMonth: number | null;
  startYear: number | null;
  finishDay: number | null;
  finishMonth: number | null;
  finishYear: number | null;
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
    startDay: yup.number().required().min(1).max(31),
    startMonth: yup.number().required().min(1).max(12),
    startYear: yup
      .number()
      .required()
      .min(thisYear - 100)
      .max(thisYear),
    finalDay: yup.number().optional().min(1).max(31),
    finalMonth: yup.number().optional().min(1).max(12),
    finalYear: yup
      .number()
      .required()
      .min(thisYear - 100)
      .max(thisYear),
    isOngoing: yup.boolean().required(),
    email: yup.string().email().required(),
    mobile: yup.string().matches(phoneRegExp, "Phone number is not valid"),
    // not sure if that is all validation required for address
    address: yup.string(),
    hoursPerWeek: yup
      .number()
      .required()
      .min(1)
      .max(24 * 7),
  });

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });

  // convert numbers to strings when sending post request
  // convert strings to numbers and set it out in the right fields on get request
  let startDateArray = employee.startDate ? employee.startDate.split("-") : [];
  let finishDateArray = employee.finishDate
    ? employee.finishDate.split("-")
    : [];

  //TODO1: finish date is optional
  //TODO2: listen to Calum
  //TODO3: if Ongoing is selected ? no finish date required : finish date required

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
                  value={employee.contractType}
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
                defaultValue={startDateArray[2]}
                {...register("startDay")}
              />
            }
            {
              <Controller
                control={control}
                name="startMonth"
                render={({ field }) => (
                  <Select
                    {...field}
                    defaultValue={startDateArray[1]}
                    className={styles.DateSelect}
                  >
                    <Option value={1}>January</Option>
                    <Option value={2}>February</Option>
                    <Option value={3}>March</Option>
                    <Option value={4}>April</Option>
                    <Option value={5}>May</Option>
                    <Option value={6}>June</Option>
                    <Option value={7}>July</Option>
                    <Option value={8}>August</Option>
                    <Option value={9}>September</Option>
                    <Option value={10}>October</Option>
                    <Option value={11}>November</Option>
                    <Option value={12}>December</Option>
                  </Select>
                )}
              />
            }

            {
              <input
                defaultValue={startDateArray[0]}
                {...register("startYear")}
              />
            }
          </section>

          <h5>Finish date</h5>
          <section>
            {
              <input
                defaultValue={finishDateArray[2]}
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
                    defaultValue={finishDateArray ? finishDateArray[1] : 1}
                    className={styles.DateSelect}
                  >
                    <Option value={1}>January</Option>
                    <Option value={2}>February</Option>
                    <Option value={3}>March</Option>
                    <Option value={4}>April</Option>
                    <Option value={5}>May</Option>
                    <Option value={6}>June</Option>
                    <Option value={7}>July</Option>
                    <Option value={8}>August</Option>
                    <Option value={9}>September</Option>
                    <Option value={10}>October</Option>
                    <Option value={11}>November</Option>
                    <Option value={12}>December</Option>
                  </Select>
                )}
              />
            }
            {
              <input
                defaultValue={finishDateArray[0]}
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
                    onChange={(e) => {
                      onChange(e.target.checked);
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
                  value={employee.workType}
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
