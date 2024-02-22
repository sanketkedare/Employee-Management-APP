import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./Navbar/NavBar";
import Employee from "./Components/Employee";
import CreateEmployee from "./Components/CreateEmployee";
import EditEmployee from "./Components/EditEmployee";

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element= {<Employee/>}/>
        <Route path="/create" element= {<CreateEmployee/>}/>
        <Route path="/edit/:id" element = {<EditEmployee/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
