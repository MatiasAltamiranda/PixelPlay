import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


import AuthState from "./context/authState";
import GameState from "./context/games/gamesState";

//Routes
import Home from "./pages/home";
import Layout from "./components/layout/layout";
import Prueba from "./pages/prueba";
import Private from "./pages/private";
import Register from "./pages/register";
import PrivateRoute from "./routes/privateRoute";
import Login from "./pages/login";
import ForgotPassword from "./pages/forgotPassword";
import ResetPassword from "./pages/resetPassword";
import Admin from "./pages/admin";
import Profile from "./pages/profile";
import AdminRoute from "./routes/adminRoute";
import Category_template from "./pages/template_category";
import TemplateGame from "./pages/templateGame";
import Cart from "./pages/cart";

function App() {
  return (
    <>
      <AuthState>
        <GameState>
              <Layout>
                <Routes>
                  <Route path="/" element={<Home />} />
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
                  <Route path="/panel-admin" element={
                  <AdminRoute>
                  <Admin/>
                  </AdminRoute>
                  }/>
                  <Route path="/profile" element={
                  <PrivateRoute>   
                  <Profile/>
                  </PrivateRoute>
                }/>
                  <Route path="/cart" element={
                  <PrivateRoute>   
                  <Cart/>
                  </PrivateRoute>
                }/>
                <Route path="/category/:category" element ={<Category_template/>}/>
                <Route path="/:slug" element={<TemplateGame/>}/>
                </Routes>
              
              </Layout>
        </GameState>
      </AuthState>
    </>
  );
}

export default App;
