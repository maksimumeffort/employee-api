import { useForm, SubmitHandler } from "react-hook-form";
import { Routes, Route, Link } from "react-router-dom";
import ReactDOM from "react-dom";
import "./App.css";
import axios, { AxiosResponse } from "axios";

type Inputs = {
  firstName: string;
  exampleRequired: string;
};

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    // console.log(data);
    axios
      .post("http://localhost:8080/employees", data)
      .then((res) => {
        alert(`Employee ${res.data.firstName} successfully added to database`);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <input defaultValue="name" {...register("firstName")} />

        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}

        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
