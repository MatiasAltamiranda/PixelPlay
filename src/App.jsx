import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthState from "./context/authState";

//Routes
import Progress from "./pages/Progres"
import Home from "./pages/home"
import Layout from "./components/layout/layout";
import Prueba from "./pages/prueba";
import Register from "./pages/register";
import Private from "./pages/private";
import Register2 from "./pages/register2"

function App() {


  return (
    <>
    <AuthState>
         <Layout>
            <Routes>
              <Route path="/" element={<Progress/>} />
              <Route path="/home" element={<Home/>} />
              <Route path="/prueba" element={<Prueba/>} />
              <Route path="/register" element={<Register/>} />
              <Route path="/private" element={<Private/>} />
              <Route path="/registro" element={<Register2/>} />
            </Routes>
         </Layout>
     </AuthState>
    </>
  )
}

export default App
