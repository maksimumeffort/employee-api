import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import styles from "./App.module.scss";
import { HomePage } from "./pages/HomePage/HomePage";
import { NewEmployeePage } from "./pages/NewEmployeePage/NewEmployeePage";
import { EmployeePage } from "./pages/EmployeePage/EmployeePage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/new" element={<NewEmployeePage />} />
        <Route path="/:id" element={<EmployeePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
