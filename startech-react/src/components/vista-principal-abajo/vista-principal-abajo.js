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
        <div className="table-responsive">
          <table className="table" id="dataTable">
            <thead>
              <tr>
                <th>Producto</th>
                <th>Descuento</th>
                <th>Precio</th>
                <th>Categoria</th>
              </tr>
            </thead>
            <tbody>
              {tableRowsData.map((row, i) => {
                return <ChartRow {...row} key={i} />;
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Chart;
