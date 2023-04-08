import axios from "axios";
import { NavLink } from "react-router-dom";

export const EmployeeCard = ({ employee, setDeleteEmployee }: any) => {
  const handleDelete = () => {
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
    <div>
      <h3>id: {employee.id}</h3>
      <p>name: {employee.name}</p>
      <NavLink to={`/${employee.id}`}>Edit</NavLink>{" "}
      <a onClick={handleDelete}>Delete</a>
    </div>
  );
};

export default EmployeeCard;
