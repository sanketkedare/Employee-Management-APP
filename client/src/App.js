import "./App.css";
import Employee from "./Components/Employee";

function App() {
  return (
    <div className="h-[100vh] overflow-y-auto">
      <h1 className="font-bold text-2xl py-4 text-center">Employee Management Application</h1>
      <Employee/>
    </div>
  )
}

export default App;
