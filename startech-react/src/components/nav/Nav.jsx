import "../nav/nav.css";
import React from "react";
import image from "../../assets/images/logo.ico";
import { Link } from "react-router-dom";

export function PanelLeft(props) {
   return (
    <React.Fragment>
      <ul className="sidebar" id="sidebar">
        
        <Link className="sidebar-brand" to="/">
          <div className="sidebar-brand-icon">
            <img src={image} alt="Startech" width={150} />
          </div>
        </Link>

        <hr className="sidebar-divider my-0" />

        <li className="nav-item active">
          <Link className="nav-link" to="/">
            <span>Startech Dashboard</span>
          </Link>
        </li>

        <hr className="sidebar-divider" />

        {/* Heading */}
        <div className="sidebar-heading">Actions</div>

        {/* Nav Item - Pages */}
        <li className="nav-item">
          <Link className="nav-link" to="/genres">
            <i className="fas fa-folder"></i>
            <span>Clasificaciones</span>
          </Link>
        </li>

        {/* Nav Item - Charts */}
        <li className="nav-item">
          <Link className="nav-link" to="/last">
            <i className="fas fa-chart-area"></i>
            <span>Último producto vendido</span>
          </Link>
        </li>

        {/* Nav Item - Tables */}
        <li className="nav-item">
          <Link className="nav-link" to="/usuarios">
            <i className="fas fa-user"></i>
            <span>usuarios</span>
          </Link>
        </li>

        {/* Divider */}
        <hr className="sidebar-divider d-none d-md-block" />
      </ul>
      {/* End of Sidebar */}
    </React.Fragment>
  );
}

export default PanelLeft;
