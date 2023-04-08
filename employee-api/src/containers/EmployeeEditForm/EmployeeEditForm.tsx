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

export const EmployeeEditForm = ({ employee, onSubmit }: any) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({});

  return (
    <div>
      <section className="AddEmployee">
        <form onSubmit={handleSubmit(onSubmit)}>
          {<input defaultValue={employee.name} {...register("name")} />}
          {
            <input
              defaultValue={employee.middleName}
              {...register("middleName")}
            />
          }
          {<input defaultValue={employee.lastName} {...register("lastName")} />}
          {
            <input
              defaultValue={employee.contractType}
              {...register("contractType")}
            />
          }
          {<input defaultValue={employee.workType} {...register("workType")} />}
          {
            <input
              defaultValue={employee.lengthOfService}
              {...register("lengthOfService")}
            />
          }
          {<input defaultValue={employee.email} {...register("email")} />}
          {<input defaultValue={employee.mobile} {...register("mobile")} />}
          {<input defaultValue={employee.address} {...register("address")} />}
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
