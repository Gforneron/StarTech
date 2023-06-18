import React from 'react';
import { Header } from '../header/HeaderPanels';
import { UserPanel } from '../userpanel/UserPanel';
import '../Usuarios/usuarios.css';

function Usuario() {
  return (
    <div className="usuario-container">
      <Header />
      <div className="spacer"></div>
      <UserPanel />
    </div>
  );
}

export default Usuario;
