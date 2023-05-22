import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AuthState from "./context/authState";

//Routes
import Progress from "./pages/Progres";
import Home from "./pages/home";
import Layout from "./components/layout/layout";
import Prueba from "./pages/prueba";
import Private from "./pages/private";
import Register from "./pages/register";
import PrivateRoute from "./routes/privateRoute";
import Login from "./pages/login";
import ForgotPassword from "./pages/forgotPassword";
import ResetPassword from "./pages/resetPassword";

function App() {
  return (
    <>
      <AuthState>
        <Layout>
          <Routes>
            <Route path="/" element={<Progress />} />
            <Route path="/home" element={<Home />} />
            <Route path="/prueba" element={<Prueba />} />
            <Route
              path="/private"
              element={
                <PrivateRoute>
                  <Private/>
                </PrivateRoute>
              }
            />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgotpassword" element={<ForgotPassword/>}/>
            <Route path="/resetpassword/:token" element={<ResetPassword/>}/>
          </Routes>
        </Layout>
      </AuthState>
    </>
  );
}

export default App;
