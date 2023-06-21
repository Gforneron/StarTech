import React, { useEffect, useState } from 'react';
import SmallCard from '../SmallCard/SmallCard';
import './ContentRowMovies.css';

function ContentRowMovies() {
  const [usuario, setUsuarios] = useState([]);
  const [productos, setProductos] = useState([]);
  const [categorias, setCategorias] = useState(0);

  useEffect(() => {
    fetch("http://localhost:3001/api/usuarios")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUsuarios(data.lista);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:3001/api/productos")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProductos(data.products);
        setCategorias(Object.keys(data.countByCategory).length);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  let ProductosDB = {
    title: 'Cantidad productos',
    color: 'primary',
    cuantity: productos.length,
    icon: 'fa fa-shopping-cart'
  };
  

  let UsuariosDB = {
    title: 'Cantidad de usuarios',
    color: 'success',
    cuantity: usuario.length,
    icon: 'fa-user'
  };

  let categoriasCard = {
    title: 'Cantidad de categorías',
    color: 'success',
    cuantity: categorias,
    icon: 'fa fa-tags'
  };
  

  let cartProps = [ProductosDB, UsuariosDB, categoriasCard];

  return (
    <div className="row">
      {cartProps.map((movie, i) => {
        return <SmallCard {...movie} key={i} />;
      })}
    </div>
  );
}

export default ContentRowMovies;
