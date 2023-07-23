import { useState, useContext } from "react";
import AuthContext from "../context/authContext";

import "./css/profile.css";

const Profile = () => {

  const [readInput , setReadInput] = useState(true);

  const { user, updateUser } = useContext(AuthContext);
  const [formProfile, setFormProfile] = useState({
    name: user.name,
    lastname: user.lastname,
    email: user.email,
    profilePhoto: "",
  });



  const { name, lastname, email, profilePhoto } = formProfile;
  const handleChange = (e) => {
    setFormProfile({
      ...formProfile,
      [e.target.name]: e.target.value,
    });
  };

  const onChangeFile = (e) => {
    const profilePhoto = e.target.files[0];
    setFormProfile({ ...formProfile, profilePhoto });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("profilePhoto", profilePhoto);
    formData.append("name", name);
    formData.append("lastname", lastname);
    formData.append("email", email);
    updateUser(formData);
  };

  const handleOnClickEdit = (e) =>{
    setReadInput(!readInput)
  }

  return (
    <>
      <div className="container user_profile">
        <div className="row user_info">
          <h1 className="user_profile_title">Mi Perfil</h1>
          <div className="col-12 col-lg-4 text-center">
            <img
              className="user_profile_photo"
              src={`${import.meta.env.VITE_APP_USER_IMAGES}/${
                user.profilePhoto
              }`}
              alt={user.name}
            ></img>
            <p className="user_profile_name">
              {user.name} {user.lastname}
            </p>
          </div>

          <div className="col-12 col-lg-8 profile_form">
            {
              (readInput)? ( <p className="profile_form_edit text-end" onClick={handleOnClickEdit}>Toca aquí para editar los valores de la cuenta</p>) : ( <p className="profile_form_edit text-end" onClick={handleOnClickEdit}>Toca aquí para desactivar la edición</p>)
            }
           
            <form onSubmit={handleSubmit}>
              <div>
                <label>Nombre :</label>
                <input
                  className={(readInput)? "profile_form_input" : "profile_form_input input_active"}
                  type="text"
                  name="name"
                  value={name}
                  onChange={handleChange}
                  readOnly={readInput}
                />
              </div>
              <div>
                <label>Apellido :</label>
                <input
                 className={(readInput)? "profile_form_input" : "profile_form_input input_active"}
                  type="text"
                  name="lastname"
                  value={lastname}
                  onChange={handleChange}
                  readOnly={readInput}
                />
              </div>
              <div>
                <label>E-mail :</label>
                <input
                  className={(readInput)? "profile_form_input" : "profile_form_input input_active"}
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  readOnly={readInput}
                />
              </div>

              <div>
                <input
                  className="profile_form_input_file"
                  type="file"
                  accept="image/*"
                  name="profilePhoto"
                  onChange={onChangeFile}
                  disabled={readInput}
                />
              </div>
              <div className="text-center">
                <button className={readInput? "menu_btn registro profile_form_submit btn-desactivado" :"menu_btn registro profile_form_submit"} type="submit"  disabled={readInput}>
                  Actualizar
                </button>
                
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
