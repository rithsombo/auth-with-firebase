import { Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Routee from "./pages/private-route/Route";
import Profile from "./pages/profile/Profile";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/profile"
          element={
            <Routee>
              <Profile />
            </Routee>
          }
        />
      </Routes>
    </>
  );
}

export default App;
