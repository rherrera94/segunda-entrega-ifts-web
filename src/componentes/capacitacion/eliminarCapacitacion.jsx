import servicios from '../../servicio/services';
import axios from 'axios';
import React from 'react';
import swal from 'sweetalert';
export default function Capacitacioneliminar() {

    const [capacitacion,setCapacitacion]=React.useState([]);
    const [lists,setLists]=React.useState(0);

    function info (){
        const listadoCapacitacion=async()=>{
            try{
                let respuesta=await axios.get('/capacitacion/todas',servicios.enviarToken());
                setCapacitacion(respuesta.data);
                setLists(1);
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
        listadoCapacitacion();
    } 
    React.useEffect(() => {
        info();
    }, []);
    function borrador(capacitacionE){
        const modificacion=async(cap)=>{
            try{
                //el null es por que en ese espacio van las opciones del body que en este caso ira vacio
                await axios.put(`http://localhost:5500/capacitacion/borrar/${cap}`,null,servicios.enviarToken());
                info();
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
        modificacion(capacitacionE);
    }

    function rehabilitar(capacitacionR){
        const habilita=async(cap)=>{
            try{
                //el null es por que en ese espacio van las opciones del body que en este caso ira vacio
                await axios.put('/capacitacion/rehabilitar/'+cap,null,servicios.enviarToken());
                info();
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
        habilita(capacitacionR);
    }
    if (capacitacion.length!==0 && lists===1){
        return (
            <div className="cumple-tabla">
                <h2> Capacitaciones disponibles para los empleados de la empresa</h2><br/>
                <table className="tabla-cumpleanios">
                        <tbody>
                            <tr> 
                                <th>Día</th> 
                                <th>Curso</th> 
                                <th>De baja</th>
                                <th>Acción</th>
                            </tr>
                            {capacitacion.map((unCapacitacion, index) => {
                                let d=new Date(unCapacitacion.fechainicio);
                                    return (
                                        <tr key={index}>
                                            <td>{d.getDay()}/{d.getMonth()}/{d.getFullYear()}</td> 
                                            <td>{unCapacitacion.curso}</td>
                                            {unCapacitacion.eliminada?<td>Si</td>:<td>No</td>}
                                            {
                                                !unCapacitacion.eliminada?
                                                <td><button type="button" onClick={() => borrador(unCapacitacion.id) } className="btn-dar-baja">Dar de Baja</button></td>:
                                                <td><button type="button" onClick={() => rehabilitar(unCapacitacion.id) } className="btn-rehabilitar">rehabilitar</button></td>
                                            }
                                        </tr>         
                                    )
                                }
                            )}
                        </tbody>
                </table>
            </div>
        )    
    }else{
        return(
            <div>
                <h3>No se han encontrado cursos para mostrar</h3>
            </div>
        )
    }
}
