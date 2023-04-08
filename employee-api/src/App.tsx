
import { useForm, SubmitHandler } from "react-hook-form";
import { Routes, Route, Link } from "react-router-dom";
import ReactDOM from "react-dom";
import styles from "./App.module.scss";
import axios, { AxiosResponse } from "axios";
import { Value } from "sass";
import EmployeeList from "./containers/EmployeeList/EmployeeList";

type Inputs = {
  name: string;
  exampleRequired: string;
};

const App = () => {

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
    <div className={styles.App}>
      <section className={styles.AddEmployee}>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}

          {<input {...register("name")} />}

          {/* errors will return when field validation fails  */}
          {errors.exampleRequired && <span>This field is required</span>}

          <input type="submit" />
        </form>
      </section>

      <section className={styles.List}>
        <EmployeeList />
      </section>
    </div>
  );
};

export default App;
