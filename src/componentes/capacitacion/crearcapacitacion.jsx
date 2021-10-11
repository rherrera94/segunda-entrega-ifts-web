import Formaltacap from "./formularioCapacitacion";
import axios from "axios";
import React, { useState } from 'react';
import servicios from "../../servicio/services";
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';
export default function Altacurso() {
    const [curso,setCurso] = useState('');
    const [fechainicio,setFechainicio] = useState('');
    const history = useHistory();
    const nuevoCurso=async (event)=>{
        event.preventDefault();
        try{
            const capacitacionCreado = await axios.post('/capacitacion', {curso,fechainicio},servicios.enviarToken());
            if (capacitacionCreado.status === 200) {
                history.push("/");
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
    }
    return(
        <Formaltacap manejadorCursoCambio= {({target}) => setCurso(target.value)} 
        manejadorFechaCambio={({target}) => setFechainicio(target.value)} 
        handleSubmit={nuevoCurso}></Formaltacap>
    )
}