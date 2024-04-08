import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./pages/headers/Header";
import { Routes, Route } from "react-router-dom";
import DashBoard from "./pages/dashboard/Dashboard";
import NoMatch from "./pages/noMatch/NoMatch";
import NewEmployee from "./pages/employee/NewEmployee";
import UpdateEmployee from "./pages/employee/UpdateEmployee";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/employee" element={<NewEmployee />} />
        <Route path="/employee/:id" element={<UpdateEmployee />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;
