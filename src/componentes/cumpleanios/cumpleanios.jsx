import servicios from '../../servicio/services';
import axios from 'axios';
import React from 'react';
import swal from 'sweetalert';
export default function Cumpleanios() {

    const [empleados,setEmpleados]=React.useState([]);
    const [lists,setLists]=React.useState(0);

    function info (){
        const listadoEmpleados=async()=>{
            try{
                let respuesta=await axios.get('/empleado',servicios.enviarToken());
                setEmpleados(respuesta.data);
                setLists(1);
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
        listadoEmpleados();
    } 
    React.useEffect(() => {
        info();
    }, []);
    if (empleados.length!==0 && lists===1){
        return (
            <div className="cumple-tabla">
                <h2> Festejemos junto a nuestros compañeros este día tan especial</h2><br/>
                <table className="tabla-cumpleanios">
                        <tbody>
                            <tr> 
                                <th>Día</th> 
                                <th>Empleado</th> 
                            </tr>
                            {empleados.map((unEmpleado, index) => {
                                let d=new Date(unEmpleado.nacimiento);
                                let dcomp=new Date();
                                if(d.getMonth()===dcomp.getMonth()){  
                                    let dia=d.getDate();
                                    return (
                                        <tr key={index}>
                                            <td>{dia}</td> 
                                            <td>{unEmpleado.nombre} {unEmpleado.apellido}</td>
                                        </tr>         
                                        );
                                }
                                return null;
                            })}
                        </tbody>
                </table>
            </div>
        )    
    }else{
        return(
            <div>
                <h3>Este mes no cumpleaños ningún compañero</h3>
            </div>
        )
    }
}
