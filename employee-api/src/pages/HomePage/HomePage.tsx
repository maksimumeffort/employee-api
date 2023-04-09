import { NavLink } from "react-router-dom";
import EmployeeList from "../../containers/EmployeeList/EmployeeList";
import styles from "./HomePage.module.scss";

export const HomePage = () => {
  return (
    <div>
      <section className={styles.HeadingSection}>
        <h1 className={styles.HeadingSectionText}>Employees' list</h1>
      </section>
      <div className={styles.HomePage}>
        <section className={styles.ButtonSection}>
          <p className={styles.ButtonSectionText}>
            Please click on 'Edit' to find more details of each employee.
          </p>
          <button className={styles.ButtonSectionButton}>
            <NavLink to={"/new"} className={styles.ButtonSectionButtonLink}>
              Add Employee
            </NavLink>
          </button>
        </section>
        <section className={styles.ListSection}>
          <EmployeeList />
        </section>
      </div>
    </div>
  );
};
