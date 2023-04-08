import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import styles from "./App.module.scss";
import EmployeeList from "./containers/EmployeeList/EmployeeList";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/employees" />
        <Route path="/employees/:id" />
      </Routes>
    </BrowserRouter>
    // <div className={styles.App}>
    //   <button>Add Employee</button>

    //   <section className={styles.List}>
    //     <EmployeeList />
    //   </section>
    // </div>
  );
};

export default App;
