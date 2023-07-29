import GamesContext from "../../../context/games/gamesContext";
import "./adminGames.css";
import Swal from "sweetalert2";
import { useState, useContext, useEffect } from "react";
import Table from "react-bootstrap/Table";

const AdminGames = () => {
  const {
    createGame,
    getGames,
    games,
    loading,
    deleteGame,
    getOneGame,
    updateGame,
  } = useContext(GamesContext);

  const [formGames, setFormGames] = useState({
    tittle: "",
    description: "",
    franchise: "",
    price: 0,
    developer: "",
    coverImage: "",
    images: [],
    category: "",
  });

  const [idGame, setIdGame] = useState(null);

  const getIdGame = (id) => {
    setIdGame(id);
  };

  useEffect(() => {}, [idGame]);

  useEffect(() => {
    getGames();
  }, [createGame]);

  function traerJuegos() {
    getGames();
  }

  function resetForm() {
    setFormGames({
      tittle: "",
      description: "",
      franchise: "",
      price: 0,
      developer: "",
      coverImage: "",
      images: [],
      category: "",
    });
  }

  const {
    tittle,
    description,
    franchise,
    price,
    developer,
    coverImage,
    images,
    category,
  } = formGames;

  const handleChange = (e) => {
    setFormGames({
      ...formGames,
      [e.target.name]: e.target.value,
    });
  };
  const handleImageCover = (e) => {
    const coverImage = e.target.files[0];
    setFormGames({ ...formGames, coverImage });
  };

  const handleImages = (e) => {
    const images = e.target.files;
    const maxImages = 3;
    if (images.length > maxImages) {
      alert("Solo se permiten subir hasta 3 imágenes");
    } else {
      setFormGames({ ...formGames, images });
    }
  };

  const cancelEdit = () => {
    setIdGame(null);
    resetForm();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("tittle", tittle);
    formData.append("description", description);
    formData.append("franchise", franchise);
    formData.append("price", price);
    formData.append("developer", developer);
    formData.append("category", category);
    formData.append("coverImage", coverImage);
    for (let i = 0; i < images.length; i++) {
      formData.append("images", images[i]);
    }
    createGame(formData);
    resetForm();
    traerJuegos();
  };

  const handleClickDeleteGame = (id) => {
    Swal.fire({
      title: "Estas seguro?",
      text: "Estas por eliminar un juego!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Eliminado!", "El juego fue eliminado con exito", "success");
        deleteGame(id);
      }
    });
  };

  const getGameByEdit = async (id) => {
    getIdGame(id);
    getOneGame(id).then((response) => {
      const data = response.data.game;
      setFormGames({
        tittle: data.tittle,
        description: data.description,
        franchise: data.franchise,
        price: data.price,
        developer: data.developer,
        coverImage: data.coverImage,
        images: data.images,
        category: data.category,
      });
    });
  };

  const editGame = () => {
    const formData = new FormData();
    formData.append("tittle", tittle);
    formData.append("description", description);
    formData.append("franchise", franchise);
    formData.append("price", price);
    formData.append("developer", developer);
    formData.append("category", category);
    formData.append("coverImage", coverImage);
    for (let i = 0; i < images.length; i++) {
      formData.append("images", formGames.images[i]);
    }
    updateGame(idGame, formData);
    resetForm();
    setIdGame(null);
  };

  return (
    <>
      <section className="section_admin_games col-12 col-lg-4">
        <form className="formulario_admin" onSubmit={handleSubmit}>
          <h2 className="section_admin_games_tittle mb-4">AGREGAR JUEGO</h2>
          <div>
            <label>Titulo del juego</label>
            <input
              className="formulario_admin_input"
              type="text"
              name="tittle"
              value={tittle}
              onChange={handleChange}
              placeholder="Ingrese el titulo del juego"
              required
              minLength="2"
              maxLength="50"
            />
          </div>
          <div>
            <label>Descripcion</label>
            <input
              className="formulario_admin_input"
              type="text"
              name="description"
              value={description}
              onChange={handleChange}
              placeholder="Ingrese descripcion del juego"
              required
              minLength="10"
              maxLength="450"
            />
          </div>
          <div>
            <label>Categoria</label>
            <input
              className="formulario_admin_input"
              type="text"
              name="category"
              value={category}
              onChange={handleChange}
              placeholder="Ingrese categoria del juego"
              required
              minLength="2"
              maxLength="50"
            />
          </div>
          <div>
            <label>Franquicia</label>
            <select
              className="formulario_admin_input"
              name="franchise"
              value={franchise}
              onChange={handleChange}
              required
            >
              <option value="" disabled >Selecciona una franquicia</option>
              <option value="accion">M</option>
              <option value="aventura">deportes</option>
            </select>
          </div>
          <div>
            <label>Precio</label>
            <input
              className="formulario_admin_input"
              type="number"
              name="price"
              value={price}
              onChange={handleChange}
              placeholder="Ingrese el valor del juego"
              required
            />
          </div>
          <div>
            <label>Desarrollador</label>
            <input
              className="formulario_admin_input"
              type="text"
              name="developer"
              value={developer}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Imagen de portada</label>
            <input
              className="profile_form_input_file"
              type="file"
              name="image/*"
              onChange={handleImageCover}
              required
            />
          </div>
          <div>
            <label>Imagenes</label>
            <input
              className="profile_form_input_file"
              type="file"
              name="image/*"
              onChange={handleImages}
              multiple
              required
            />
          </div>
          {idGame === null ? (
            <button
              className="menu_btn registro formulario_admin_submit"
              type="submit"
            >
              Crear juego
            </button>
          ) : (
            <button
              className="menu_btn registro formulario_admin_submit"
              type="button"
              onClick={() => editGame()}
            >
              Editar Juego
            </button>
          )}
          {idGame === null ? (
            ""
          ) : (
            <button
              className="menu_btn registro formulario_admin_submit"
              type="button"
              onClick={() => cancelEdit()}
            >
              Cancelar
            </button>
          )}
        </form>
      </section>
      <div className="table-games col-lg-8">
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Titulo</th>
              <th>Descripcion</th>
              <th>Categoria</th>
              <th>Franquicia</th>
              <th>Desarrollador</th>
              <th>Precio</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              games.map((game) => (
                <tr key={game._id}>
                  <td>{game.tittle}</td>
                  <td>
                    {game.description.length > 40
                      ? game.description.substring(0, 40) + " ..."
                      : game.description}
                  </td>
                  <td>{game.category}</td>
                  <td>{game.franchise}</td>
                  <td>{game.developer}</td>
                  <td>$ {game.price}</td>
                  <td>
                    <i
                      className="bi bi-pencil-square table-games-icon "
                      onClick={() => getGameByEdit(game._id)}
                    ></i>
                    <i
                      className="bi bi-trash3 table-games-icon"
                      onClick={() => handleClickDeleteGame(game._id)}
                    ></i>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6">Cargando...</td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default AdminGames;
