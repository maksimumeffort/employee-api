import { useForm } from "react-hook-form";

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
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({});

  return (
    <div>
      <section className="AddEmployee">
        <form onSubmit={handleSubmit(onSubmit)}>
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
          {<label>Contract Type</label>}
          {
            <input
              defaultValue={employee.contractType}
              {...register("contractType")}
            />
          }
          {<label>Work Type</label>}
          {<input defaultValue={employee.workType} {...register("workType")} />}
          {<label>Length Of Service</label>}
          {
            <input
              defaultValue={employee.lengthOfService}
              {...register("lengthOfService")}
            />
          }
          {<label>Email</label>}
          {<input defaultValue={employee.email} {...register("email")} />}
          {<label>Mobile</label>}
          {<input defaultValue={employee.mobile} {...register("mobile")} />}
          {<label>Address</label>}
          {<input defaultValue={employee.address} {...register("address")} />}
          {<label>Hours Per Week</label>}
          {
            <input
              defaultValue={employee.hoursPerWeek}
              {...register("hoursPerWeek")}
            />
          }

          {/* errors will return when field validation fails  */}
          {errors.exampleRequired && <span>This field is required</span>}

          <input type="submit" />
        </form>
      </section>
    </div>
  );
};
