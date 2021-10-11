import Cambiocontra from "./formcambiocontra";
import axios from "axios";
import React, { useState } from 'react';
import servicios from "../servicio/services";
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';
export default function Cambioc() {
    const [usuario,setNombreUsuario] = useState('');
    const [contrasenia,setContrasenia] = useState('');
    const history = useHistory();
    const nuevoUsu=async (event)=>{
        event.preventDefault();
        try{
            const contraseniaCambiada = await axios.put(`/userinterno/cambio/${usuario}`, {contrasenia},servicios.enviarToken());
            if (contraseniaCambiada.status === 200) {
                history.push("/"); 
            }
        }catch(e){
            swal({
                title:"Error: ",
                text: e.response.data.Mensaje,
                icon:"warning",
                buttons:["aceptar",0]})
            .then(()=>{
                return;
            })
        }
        

    }
    return(
        <Cambiocontra manejadorUsuarioCambio= {({target}) => setNombreUsuario(target.value)}
        manejadorContraseniaCambio={({target}) => setContrasenia(target.value)} handleSubmit={nuevoUsu}></Cambiocontra>
    )
}