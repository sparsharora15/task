import { Route, Routes } from "react-router-dom";
import "./App.css";
import Table from "./Components/Table";
import CompleteDetails from "./Components/CompleteDetails";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Table />} />
        <Route path="/userDetails/:id" element={<CompleteDetails />} />
      </Routes>
    </div>
  );
}

export default App;
