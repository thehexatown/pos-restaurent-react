import Home from "./screens/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./screens/login/login";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/dashboard" element={<Home />} />
          <Route exact path="/" name="Join" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
