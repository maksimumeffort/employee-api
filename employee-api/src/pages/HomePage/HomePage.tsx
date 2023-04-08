import EmployeeList from "../../containers/EmployeeList/EmployeeList";

export const HomePage = () => {
  return <div className="{styles.App}">
    <button>Add Employee</button>

    <section className="{styles.List}">
      <EmployeeList />
    </section>
  </div>
};
