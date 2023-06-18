import React from "react";
import '../GenresInDb/GenresInDb.css'

function GenresInDb() {
  return (
    <div className="col-lg-6 mb-4 genres-in-db">
      <div className="card-container">
        <div className="card-header">
          <h5 className="card-title">Clasificación productos</h5>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-lg-6 mb-4">
              <div className="card-item">
                <div className="card-item-body">Electrodomésticos</div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card-item">
                <div className="card-item-body">Lavado</div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card-item">
                <div className="card-item-body">TV y audio</div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card-item">
                <div className="card-item-body">Congeladores</div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card-item">
                <div className="card-item-body">Celular</div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card-item">
                <div className="card-item-body">Nootebook</div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card-item">
                <div className="card-item-body">Componente</div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card-item">
                <div className="card-item-body">Tablet</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GenresInDb;
