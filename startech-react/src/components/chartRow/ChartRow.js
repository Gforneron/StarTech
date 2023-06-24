import React, { useState, useEffect } from "react";

function App() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/productos")
      .then((response) => response.json())
      .then((data) => {
        setProductos(data.products);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Lista de productos</h1>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Descuento</th>
            <th>Precio</th>
            <th>Clase</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto) => (
            <tr key={producto.id}>
              <td> {producto.name}</td>
              <td> {producto.descuento} %</td>
              <td> {producto.precio} $</td>
              <td> {producto.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
