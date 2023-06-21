import { useEffect, useState } from "react";
import "../../assets/viewUser.css";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
export function ViewUser() {
  const { userId } = useParams();
  const [usuarios, setUsuario] = useState(null);
  useEffect(() => {
    fetch(`http://localhost:3001/api/usuarios/${userId}`)
      .then((res) => res.json())
      .then((data) => {
        setUsuario(data.user);
      })
      .catch((err) => console.error(err));
  }, [userId]);
  return (
    <div className="user">
      <div className="details" key={usuarios?.id}>
        <h2>Detalles del usuarios</h2>
        <p>ID: {usuarios?.id}</p>
        <p>Nombre: {usuarios?.name}</p>
        <p>Email: {usuarios?.email}</p>
        <img
        src={`${usuarios?.detail}`}
        alt="Usuario"
        />
        {/* me falta arreglar esto, la cosa esta en la api, la api devuelve una ruta*/}
      </div>
    </div>
  );
}
