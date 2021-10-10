import Formaltaemp from "./formuempleado";
import axios from "axios";
import React, { useState } from 'react';
import servicios from "../servicio/services";
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';
export default function Altaempleado() {
    const [nombre,setNombre] = useState('');
    const [apellido,setApellido] = useState('');
    const [mail,setMail] = useState('');
    const [cuil,setCuil] = useState('');
    const [nacimiento,setNacimiento] = useState('');
    const [cargo,setCargo]=useState('');
    const history = useHistory();
    const nuevoEmp=async (event)=>{
        event.preventDefault();
        try{
            const empleadoCreado = await axios.post('/empleado', {apellido,nombre,mail,nacimiento,cuil,cargo},servicios.enviarToken());
            if (empleadoCreado.status === 200) {
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
        <Formaltaemp manejadorNombreCambio= {({target}) => setNombre(target.value)} manejadorApellidoCambio= {({target}) => setApellido(target.value)} 
        manejadorMailCambio={({target}) => setMail(target.value)} manejadorCuilCambio= {({target}) => setCuil(target.value)}
        manejadorNacimientoCambio={({target}) => setNacimiento(target.value)} manejadorCargoCambio={({target}) => setCargo(target.value)}
        handleSubmit={nuevoEmp}></Formaltaemp>
    )
}