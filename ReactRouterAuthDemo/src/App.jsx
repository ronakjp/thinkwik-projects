import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login, { loginAction, loginLoader } from "./pages/Login";
import Profile from "./pages/Profile";
import ProtectedRoutes from "./components/ProtectedRoutes.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/login"
        element={<Login />}
        loader={loginLoader}
        action={loginAction}
      />
      <Route
        path="/profile"
        element={
          <ProtectedRoutes>
            <Profile />
          </ProtectedRoutes>
        }
      />
    </Routes>
  );
}

export default App;
