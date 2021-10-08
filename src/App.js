import axios from 'axios';
import React, { useState, useEffect } from 'react';
import "normalize.css";
import './App.css';
import Ruteador from './componentes/ruteador';
import servicios from "./servicio/services";
import Login from './componentes/login';
function App() {
  const [nombreUsuario,setNombreUsuario] = useState('');
  const [contrasenia,setContrasenia] = useState('');
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const usuarioLogeado = window.localStorage.getItem('infoUsuario');//intento obtener la informacion del usuario del local storage
    if (usuarioLogeado) { //si el usuario ya esta logeado
      const usuario = JSON.parse(usuarioLogeado);//agarro la informacion que me llego del usuario
      setUsuario(usuario);//seteo el usuario con esa informacion
      servicios.setToken(usuario.token);//me guardo la token para despues estar pasandola a la api y no ir constantemente al local storage
    }
  }, [])
  const logeo = async (event) => {
    event.preventDefault()
    try {
      const { data,token } = await axios.post('http://localhost:5500/userinterno/login', {nombreUsuario,contrasenia})
      window.localStorage.setItem(
        'infoUsuario', JSON.stringify({data,token})
      )
      servicios.setToken(token)
      setUsuario({data,token})
      setNombreUsuario('')
      setContrasenia('')
    } catch(e) {
      console.log(e.message)
    }
  }
  /***
 * Al deslogearse debo borrar todo rastro de la sesion del usuario
 * por lo tanto tengo que borrar del local storage la token y tambien de los 
 * servicios.
 */
   const manejadorDeslogeo = () => {
    setUsuario(null)
    servicios.setToken(null)
    window.localStorage.removeItem('infoUsuario')
  }
  return (
    <div className="App">
      {
        usuario? <Ruteador manejadorDeslogeo={manejadorDeslogeo}></Ruteador>:
        <Login nombreUsuario={nombreUsuario} contrasenia={contrasenia} 
        manejadorUsuarioCambio={({target}) => setNombreUsuario(target.value)}
        manejadorContraseniaCambio={({target}) => setContrasenia(target.value)}
        handleSubmit={logeo}></Login>
      } 
    </div>
  );
}

export default App;
