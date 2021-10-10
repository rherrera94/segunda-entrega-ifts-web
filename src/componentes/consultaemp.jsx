import servicios from '../servicio/services';
import axios from 'axios';
import React from 'react';
import swal from 'sweetalert';
export default function Consultaemp() {

    const [information,setInformation]=React.useState([]);
    const [lists,setLists]=React.useState(0);

    function info (){
        const listadoEmpleados=async()=>{
            try{
                let respuesta=await axios.get('/empleado',servicios.enviarToken());
                setInformation(respuesta.data);
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

    function borrador(empleado){
        const modificacion=async(user)=>{
            try{
                //el null es por que en ese espacio van las opciones del body que en este caso ira vacio
                await axios.put(`http://localhost:5500/empleado/borrado/${user}`,null,servicios.enviarToken());
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
        modificacion(empleado);
    }

    function rehabilitar(empleado){
        const habilita=async(user)=>{
            try{
                //el null es por que en ese espacio van las opciones del body que en este caso ira vacio
                await axios.put('/empleado/rehabilitar/'+user,null,servicios.enviarToken());
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
        habilita(empleado);
    }

    React.useEffect(() => {
        info();
    }, []);

    if(lists===1 && information.length!==0){
        return (
            <div>
                <div className="cumple-tabla">
                <h2> Empleados existentes en la base de datos</h2><br/>
                <table className="tabla-cumpleanios">
                        <tbody>
                            <tr> 
                                <th>CUIL</th> 
                                <th>Apellido</th> 
                                <th>Nombre</th>
                                <th>Mail</th>
                                <th>Nacimiento</th>
                                <th>Cargo</th>
                                <th>Baja</th>
                                <th>Acción</th>
                            </tr>
                            {information.map((unUsuario, index) => {
                               
                                    return (
                                        <tr key={index}>
                                            <td>{unUsuario.cuil}</td> 
                                            <td>{unUsuario.apellido}</td>
                                            <td>{unUsuario.nombre}</td>
                                            <td>{unUsuario.mail}</td>
                                            <td>{unUsuario.nacimiento}</td>
                                            <td>{unUsuario.cargo}</td>
                                            <td>{unUsuario.eliminado}</td>
                                            {
                                                !unUsuario.eliminado?
                                                <td><button type="button" onClick={() => borrador(unUsuario.cuil) }>Inhabilitar</button></td>:
                                                <td><button type="button" onClick={() => rehabilitar(unUsuario.cuil) }>rehabilitar</button></td>
                                            }
                                        </tr>         
                                        );
                           })}
                        </tbody>
                </table>
            </div>
            </div>
            
        )
    }else{
        return(
            <div></div>
        )
    }
}
