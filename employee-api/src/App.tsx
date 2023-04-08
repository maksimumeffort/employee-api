import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import styles from "./App.module.scss";
import { HomePage } from "./pages/HomePage/HomePage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/new" />
        <Route path="/:id" />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
