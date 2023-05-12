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

  const todayDate = new Date();

  // console.log(todayDate);

  const startDateArray = employee.startDate?.split("-");
  const finishDateArray = employee.finishDate?.split("-");

  const employeeStartDate: Date = new Date(
    `${startDateArray[0]}-${startDateArray[1]}-${startDateArray[2]}
    T10:20:30Z`
  );

  // console.log(employeeStartDate);

  const employeeFinishDate: Date = new Date(
    `${finishDateArray[0]}-${finishDateArray[1]}-${finishDateArray[2]}T10:20:30Z`
  );

  const lengthOfServiceDiff = Math.abs(
    employeeFinishDate.getTime() - employeeStartDate.getTime()
  );
  const lengthOfServiceDays = Math.ceil(
    lengthOfServiceDiff / (1000 * 3600 * 24)
  );
  const lengthOfService = (lengthOfServiceDays / 365).toFixed(1);

  // console.log(lengthOfServiceDiff);

  return (
    <div className={styles.Card}>
      <section className={styles.InfoSection}>
        <h3>
          {employee.name} {employee.middleName} {employee.lastName}
        </h3>
        <p>
          {employee.contractType} - {}yrs{" "}
        </p>
        <p>{employee.email}</p>
      </section>

      <section className={styles.LinksSection}>
        <NavLink to={`/${employee.id}`} className={styles.LinksSectionEdit}>
          Edit
        </NavLink>
        <a href="" onClick={handleDelete}>
          Remove
        </a>
      </section>
    </div>
  );
};

export default EmployeeCard;
