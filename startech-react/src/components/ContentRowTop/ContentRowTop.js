import React from 'react';
import ContentRowCenter from '../ContentRowCenter/ContentRowCenter';
import ContentRowMovies from '../ContentRowMovies/ContentRowMovies';
import Chart from '../vista-principal-abajo/vista-principal-abajo';
import './ContentRowTop.css';

function ContentRowTop() {
  return (
    <React.Fragment>
      <div className="custom-container">
        <div className="custom-header">
          <h1 className="custom-heading">Startech Dashboard</h1>
        </div>

        <ContentRowMovies />
        <ContentRowCenter />
        <Chart />
      </div>
    </React.Fragment>
  );
}

export default ContentRowTop;
