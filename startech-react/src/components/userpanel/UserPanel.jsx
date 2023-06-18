import React from 'react';
import '../userpanel/userPanel.css';

export function UserPanel(props) {
  const users = [
    { id: 1, name: 'Usuario 1', mail: 'gonzaloforneron@gmail.com'},
    { id: 2, name: 'Usuario 2', mail: 'gonzaloforneron@gmail.com' },
    { id: 3, name: 'Usuario 3', mail: 'gonzaloforneron@gmail.com' },
    { id: 4, name: 'Usuario 4', mail: 'gonzaloforneron@gmail.com' },
  ]; // Ejemplo de array de usuarios

  return (
    <div className="main-panel">
      <h1 className="panel-title">Usuarios Creados</h1>
      <div className="users-info">
        <div className="info-box">
          <p className="info-label">Cantidad de usuarios:</p>
          <p className="info-value">{users.length}</p>
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
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.mail}</td>
              <td>ir al usuario {user.id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
