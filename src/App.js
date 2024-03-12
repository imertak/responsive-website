import { BrowserRouter, Route, Routes } from "react-router-dom";
import CustomNavbar from "./components/CustomNavbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CustomNavbar></CustomNavbar>
        <Routes>
          <Route path="/"></Route>
          <Route path="/admin"></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
