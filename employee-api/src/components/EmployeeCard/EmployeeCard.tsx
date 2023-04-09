import axios from "axios";
import { NavLink } from "react-router-dom";
import styles from "./EmployeeCard.module.scss";

export const EmployeeCard = ({ employee, setDeleteEmployee }: any) => {
  const handleDelete = (event: any) => {
    event.preventDefault();
    axios({
      method: "delete",
      url: `http://localhost:8080/employees/${employee.id}`,
      responseType: "stream",
    }).then((res) => {
      setDeleteEmployee(true);
      console.log(res, "this is the response");
    });
  };

  return (
    <div className={styles.Card}>
      <section className={styles.InfoSection}>
        <h3>
          {employee.name} {employee.middleName} {employee.lastName}
        </h3>
        <p>
          {employee.workType} - {employee.lengthOfService}yrs{" "}
        </p>
        <p>{employee.email}</p>
      </section>

      <section className={styles.LinksSection}>
        <NavLink to={`/${employee.id}`} className={styles.LinksSectionEdit}>
          Edit
        </NavLink>{" "}
        <a href="" onClick={handleDelete}>
          Remove
        </a>
      </section>
    </div>
  );
};

export default EmployeeCard;
