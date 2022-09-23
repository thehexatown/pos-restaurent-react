import Home from "./screens/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./screens/login/login";
import ProtectedRoute from "./utlis/protectedRoute";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" name="Join" element={<Login />} />
          <Route element={<ProtectedRoute />}>
            <Route exact path="/dashboard" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
