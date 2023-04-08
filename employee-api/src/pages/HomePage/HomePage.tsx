import { NavLink } from "react-router-dom";
import EmployeeList from "../../containers/EmployeeList/EmployeeList";

export const HomePage = () => {
  return (
    <div className="{styles.App}">
      <button>
        <NavLink to={"/new"}>Add Employee</NavLink>
      </button>

      <section className="{styles.List}">
        <EmployeeList />
      </section>
    </div>
  );
};
