import React from "react";
import "../userpanel/userPanel.css";
import { useEffect, useState } from "react";

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
            <tr>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>ir al usuario {user.id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
