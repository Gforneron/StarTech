import React from 'react';
import ChartRow from '../chartRow/ChartRow';
import '../vista-principal-abajo/vista-principal-abajo.css';

let tableRowsData = [
  {
    Title: 'Celular Motorola',
    Length: '13%',
    Rating: '129999',
    Categories: ['Celular'],
  },
  {
    Title: 'Notebook Noblex',
    Length: '30%',
    Rating: '148000',
    Categories: ['Notebook'],
  },
];

function Chart() {
  return (
    <div className="card shadow mb-4">
      <div className="card-body">
          <table className="table" id="dataTable">
            <tbody>
              {tableRowsData.map((row, i) => {
                return <ChartRow {...row} key={i} />;
              })}
            </tbody>
          </table>
        </div>
    </div>
  );
}

export default Chart;
