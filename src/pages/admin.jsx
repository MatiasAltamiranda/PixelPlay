import "./css/admin.css";
import AdminGames from "../components/admin/games/adminGames";

const Admin = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <h1 className="title_admin text-center">Panel administrador</h1>
          <AdminGames/>
        </div>
      </div>
    </>
  );
};

export default Admin;
