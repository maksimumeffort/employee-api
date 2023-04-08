import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form";

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

export const NewEmployeePage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      name: "name",
      middleName: "",
      lastName: "lastName",
      contractType: "contractType",
      workType: "workType",
      lengthOfService: 0,
      email: "email",
      mobile: "mobile",
      address: "address",
      hoursPerWeek: 1,
    },
  });

  const onSubmit: SubmitHandler<Inputs> = (data: any) => {
    console.log(data, "before axios");
    axios
      .post("http://localhost:8080/employees", data)
      .then((res) => {
        // console.log(res.data, "after axios");
        alert(`Employee ${res.data.name} successfully added to database`);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <section className="AddEmployee">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}

          {<input {...register("name")} />}
          {<input {...register("middleName")} />}
          {<input {...register("lastName")} />}
          {<input {...register("contractType")} />}
          {<input {...register("workType")} />}
          {<input {...register("lengthOfService")} />}
          {<input {...register("email")} />}
          {<input {...register("mobile")} />}
          {<input {...register("address")} />}
          {<input {...register("hoursPerWeek")} />}

          {/* errors will return when field validation fails  */}
          {errors.exampleRequired && <span>This field is required</span>}
          <input type="submit" />
        </form>
      </section>
    </div>
  );
};
