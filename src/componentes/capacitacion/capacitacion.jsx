import servicios from '../../servicio/services';
import axios from 'axios';
import React from 'react';
import swal from 'sweetalert';
export default function Capacitacion() {

    const [capacitacion,setCapacitacion]=React.useState([]);
    const [lists,setLists]=React.useState(0);

    function info (){
        const listadoCapacitacion=async()=>{
            try{
                let respuesta=await axios.get('/capacitacion',servicios.enviarToken());
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
    if (capacitacion.length!==0 && lists===1){
        return (
            <div className="cumple-tabla">
                <h2> Capacitaciones disponibles para los empleados de la empresa</h2><br/>
                <table className="tabla-cumpleanios">
                        <tbody>
                            <tr> 
                                <th>Día</th> 
                                <th>Curso</th> 
                            </tr>
                            {capacitacion.map((unCapacitacion, index) => {
                                let d=new Date(unCapacitacion.fechainicio);
                                    return (
                                        <tr key={index}>
                                            <td>{d.getDay()}/{d.getMonth()}/{d.getFullYear()}</td> 
                                            <td>{unCapacitacion.curso}</td>
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
