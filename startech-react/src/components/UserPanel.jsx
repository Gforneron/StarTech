import '../assets/userPanel.css'
// import { useState, useEffect } from 'react';
export function UserPanel(props) {
    return (
        <div className='main-panel'>
            <ul>
                <h1>Usuarios Creados</h1>
                <p>{props.users}</p>
            </ul>
        </div>
    )
    // const [data, setData] = useState(null);
    // useEffect(async () => {
    //     const res = await fetch('https://localhost:3001/api/usuarios/')
    // },[]);
    // {data?.map((user) => (<li key={user.id}>{user.name}</li>))}
}
