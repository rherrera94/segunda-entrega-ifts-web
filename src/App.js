import axios from 'axios';
import React, { useState, useEffect } from 'react';
import "normalize.css";
import './App.css';
import Ruteador from './componentes/ruteador';
import servicios from "./servicio/services";
import Login from './componentes/login';
import swal from 'sweetalert';
import Foot from './componentes/piepagina';
function App() {
  const [nombreUsuario,setNombreUsuario] = useState('');
  const [contrasenia,setContrasenia] = useState('');
  const [usuario, setUsuario] = useState(null);
  const [admin,setAdmin]= useState(false);

  useEffect(() => {
    setAdmin(false);
    try{
      const usuarioLogeado = window.localStorage.getItem('infoUsuario');//intento obtener la informacion del usuario del local storage
      if (usuarioLogeado) { //si el usuario ya esta logeado
        const usuario = JSON.parse(usuarioLogeado);//agarro la informacion que me llego del usuario
        setUsuario(usuario);//seteo el usuario con esa informacion
        for(let i=0;i<usuario.permits.length;i++){
          if (usuario.permits[i].id==="PERMIT_ADMINISTRATE"){
            setAdmin(true);
          }
        }
      servicios.setToken(usuario.token);//me guardo la token para despues estar pasandola a la api y no ir constantemente al local storage
      }
    }catch(e){
      swal({
        title:"Se ha producido un Error: ",
        text: e.response.data.error,
        icon:"warning",
        buttons:["aceptar",0]})
    .then(()=>{
        return;
    })
    }
  }, [])

  const logeo = async (event) => {
    event.preventDefault()
    try {
      setAdmin(false);
      const {data} = await axios.post('/userinterno/login', {nombreUsuario,contrasenia})
      let usuarioNombre=data.data.username;
      let token=data.token;
      let permits=data.data.role.role_permits;
      window.localStorage.setItem(
        'infoUsuario', JSON.stringify({usuarioNombre,token,permits})
      )//guardo en el local storage la informacion de la sesión
      servicios.setToken(data.token)//para no estar ingresando al local storage constantemente guardo la token
      setUsuario({usuarioNombre,token,permits})
      for(let i=0;i<permits.length;i++){
        if (permits[i].id==="PERMIT_ADMINISTRATE"){
          setAdmin(true);//seteo admin como true para que le aparezca la barra de herramientas de administrador
        }
      }
      setNombreUsuario('')
      setContrasenia('')
    } catch(e) {
      swal({
        title:"Se ha producido un Error: ",
        text: e.response.data.error,
        icon:"warning",
        buttons:["aceptar",0]})
    .then(()=>{
        return;
    })
    }
  }
  /***
 * Al deslogearse debo borrar todo rastro de la sesion del usuario
 * por lo tanto tengo que borrar del local storage la token y tambien de los 
 * servicios.
 */
   const manejadorDeslogeo = () => {
    setUsuario(null)
    setAdmin(false);
    setContrasenia("");
    servicios.setToken(null)
    window.localStorage.removeItem('infoUsuario')
  }
  /**
   * Lo que estamos haciendo se llama renderizado condicional, esto es según el estado de usuario
   * se va a renderizar el Login o se va a renderizar la pagina. De este modo si el usuario no está
   * logeado no conocerá de las rutas de la aplicacion.
   */
  return (
    <div className="App">
      {
        usuario? <Ruteador manejadorDeslogeo={manejadorDeslogeo} admin={admin}></Ruteador>:
        <Login nombreUsuario={nombreUsuario} contrasenia={contrasenia} 
        manejadorUsuarioCambio={({target}) => setNombreUsuario(target.value)}
        manejadorContraseniaCambio={({target}) => setContrasenia(target.value)}
        handleSubmit={logeo}></Login>

      } 
      {
       usuario? <div></div>:<Foot></Foot>
      }
    </div>
  );
}

export default App;
