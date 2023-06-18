import React from 'react';
import imagenFondo from '../../assets/images/Notebook-Noblex.jpg';
import './LastMovieInDb.css';

function LastMovieInDb() {
  return (
    <div className="last-movie-card">
      <div className="last-movie-header">
        <h5 className="last-movie-title">Último producto vendido</h5>
      </div>
      <div className="last-movie-body">
        <div className="last-movie-image-container">
          <img className="last-movie-image" src={imagenFondo} alt="Star Wars - Mandalorian" />
        </div>
        <p className="last-movie-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa citationem ratione aperiam voluptatum non corporis ratione aperiam voluptatum quae dolorem culpa ratione aperiam voluptatum?</p>
        <a className="last-movie-link" target="_blank" rel="nofollow" href="/">Ver detalle producto</a>
      </div>
    </div>
  );
}

export default LastMovieInDb;
