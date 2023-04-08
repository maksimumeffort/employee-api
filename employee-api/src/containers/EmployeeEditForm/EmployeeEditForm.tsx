import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
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

          {/* errors will return when field validation fails  */}
          {errors.exampleRequired && <span>This field is required</span>}

          <input type="submit" />
        </form>
      </section>
    </div>
  );
};
