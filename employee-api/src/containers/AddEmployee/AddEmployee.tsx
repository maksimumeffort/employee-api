import axios, { AxiosResponse } from "axios";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  exampleRequired: string;
};

export const AddEmployee = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      name: "name",
    },
  });

  const onSubmit: SubmitHandler<Inputs> = (data: any) => {
    console.log(data, "before axios");
    // event.preventDefault();
    axios
      .post("http://localhost:8080/employees", data)
      .then((res) => {
        console.log(res.data, "after axios");
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

            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <span>This field is required</span>}

            <input type="submit" />
          </form>
        </section>
      </div>
    );
};
