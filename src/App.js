import Home from "./screens/home/Home";
import { HashRouter, Route, Routes } from "react-router-dom";
import Login from "./screens/login/login";

function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route exact path="/dashboard" name="Join" element={<Home />} />
          <Route exact path="/" name="Join" element={<Login />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
