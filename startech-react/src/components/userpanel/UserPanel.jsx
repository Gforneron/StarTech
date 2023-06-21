import React from "react";
import "../userpanel/userPanel.css";
import { useEffect, useState } from "react";
<<<<<<< HEAD

=======
import { Link } from "react-router-dom/cjs/react-router-dom.min";
>>>>>>> f3e99bcbf1eeae2b2adeca0a2aaceae02e581f75
export function UserPanel(props) {

  const [usuario, SetUsuarios] = useState([]);
  useEffect(() => {

    fetch("http://localhost:3001/api/usuarios")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        SetUsuarios(data.lista);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  
  return (
    <div className="main-panel">
      <h1 className="panel-title">Usuarios Creados</h1>
      <div className="users-info">
        <div className="info-box">
          <p className="info-label">Cantidad de usuarios:</p>
          <p className="info-value">{usuario.length}</p>
        </div>
      </div>
      <table className="users-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>detalle usuario</th>
          </tr>
        </thead>
        <tbody>
          {usuario.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td><Link to={`/usuarios/user/${user.id}`}>ir al usuario {user.id}</Link></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
