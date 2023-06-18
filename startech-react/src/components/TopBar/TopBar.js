import React from 'react';
import foto from '../../assets/images/usuario.png';
import './TopBar.css';

function TopBar() {
  return (
    <React.Fragment>
      {/* Topbar */}
      <nav className="topbar">
        {/* Sidebar Toggle (Topbar) */}
        <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
          <i className="fa fa-bars"></i>
        </button>

        {/* Topbar Navbar */}
        <ul className="navbar-nav ml-auto">
          <div className="topbar-divider d-none d-sm-block"></div>

          {/* Nav Item - User Information */}
          <li className="nav-item dropdown no-arrow">
            <a className="nav-link dropdown-toggle" href="/" id="userDropdown">
              <span className="mr-2 d-none d-lg-inline text-gray-600 small">Usuario</span>
              <img className="img-profile rounded-circle" src={foto} alt="Jordan Walke - Creador de React" width="60" />
            </a>
          </li>
        </ul>
      </nav>
      {/* End of Topbar */}
    </React.Fragment>
  );
}

export default TopBar;
