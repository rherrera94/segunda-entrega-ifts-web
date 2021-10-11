
import Formaltausu from "./formaltausu";
import axios from "axios";
import React, { useState } from 'react';
import servicios from "../../servicio/services";
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';
export default function Altausu() {
    const [usuario,setNombreUsuario] = useState('');
    const [contrasenia,setContrasenia] = useState('');
    const [email,setEmail] = useState('');
    const [cuil,setCuil] = useState('');
    const [rol,setRol] = useState('');
    const history = useHistory();
    const nuevoUsu=async (event)=>{
        event.preventDefault();
        try{
            const usuarioCreado = await axios.post('/userinterno', {usuario,contrasenia,email,cuil,rol},servicios.enviarToken());
            if (usuarioCreado.status === 200) {
                history.push("/"); 
                
              }
        }catch(e){
            swal({
                title:"Error: ",
                text: e.response.data.error,
                icon:"warning",
                buttons:["aceptar",0]})
            .then(()=>{
                return;
            })
        }
        

    }
    return(
        <Formaltausu manejadorUsuarioCambio= {({target}) => setNombreUsuario(target.value)} 
        manejadorEmailCambio={({target}) => setEmail(target.value)} manejadorCuilCambio= {({target}) => setCuil(target.value)}
        manejadorContraseniaCambio={({target}) => setContrasenia(target.value)} manejadorRolCambio={({target}) => setRol(target.value)}
        handleSubmit={nuevoUsu}></Formaltausu>
    )
}