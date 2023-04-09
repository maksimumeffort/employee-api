import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import { NavLink } from "react-router-dom";
import styles from "./EmployeeForm.module.scss";

type Inputs = {
  name: string;
  middleName: string;
  lastName: string;
  contractType: string;
  workType: string;
  lengthOfService: number;
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
          {<label>First Name</label>}
          {<input defaultValue={employee.name} {...register("name")} />}
          {<label>Middle Name</label>}
          {
            <input
              defaultValue={employee.middleName}
              {...register("middleName")}
            />
          }
          {<label>Last Name</label>}
          {<input defaultValue={employee.lastName} {...register("lastName")} />}
        </section>

        <section className={styles.EmployeeFormContact}>
          <h2>Contact Details</h2>
          {<label>Email</label>}
          {
            <input
              defaultValue={employee.email}
              {...register("email")}
              className={styles.EmployeeFormContactEmail}
            />
          }
          {<label>Mobile</label>}
          {
            <input
              defaultValue={employee.mobile}
              {...register("mobile")}
              className={styles.EmployeeFormContactMobile}
            />
          }
          {<label>Address</label>}
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
          <Controller
            name="select"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={[
                  { value: "chocolate", label: "Chocolate" },
                  { value: "strawberry", label: "Strawberry" },
                  { value: "vanilla", label: "Vanilla" },
                ]}
              />
            )}
          />
          {<label>Contract Type</label>}
          {
            <input
              defaultValue={employee.contractType}
              {...register("contractType")}
            />
          }
          {<label>Length Of Service</label>}
          {
            <input
              defaultValue={employee.lengthOfService}
              {...register("lengthOfService")}
            />
          }
          {<label>Work Type</label>}
          {<input defaultValue={employee.workType} {...register("workType")} />}

          {<label>Hours Per Week</label>}
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
