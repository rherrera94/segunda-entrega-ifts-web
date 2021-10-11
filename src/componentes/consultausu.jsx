import servicios from '../servicio/services';
import axios from 'axios';
import React from 'react';
import swal from 'sweetalert';
export default function Consultausu() {

    const [information,setInformation]=React.useState([]);
    const [lists,setLists]=React.useState(0);

    function info (){
        const listadoUsuarios=async()=>{
            try{
                let respuesta=await axios.get('/userinterno',servicios.enviarToken());
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
        listadoUsuarios();
    } 

    function borrador(usuario){
        const modificacion=async(user)=>{
            try{
                //el null es por que en ese espacio van las opciones del body que en este caso ira vacio
                await axios.put(`http://localhost:5500/userinterno/borrado/${user}`,null,servicios.enviarToken());
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
        modificacion(usuario);
    }

    function rehabilitar(usuario){
        const habilita=async(user)=>{
            try{
                //el null es por que en ese espacio van las opciones del body que en este caso ira vacio
                await axios.put('/userinterno/rehabilitar/'+user,null,servicios.enviarToken());
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
        habilita(usuario);
    }

    React.useEffect(() => {
        info();
    }, []);

    if(lists===1 && information.length!==0){
        return (
            <div>
                <div className="cumple-tabla">
                <h2> Usuarios existentes en la base de datos</h2><br/>
                <table className="tabla-cumpleanios">
                        <tbody>
                            <tr> 
                                <th>Usuario</th> 
                                <th>Apellido</th> 
                                <th>Nombre</th>
                                <th>Mail</th>
                                <th>Rol</th>
                                <th>Baja</th>
                                <th>Acción</th>
                            </tr>
                            {information.map((unUsuario, index) => {
                               
                                    return (
                                        <tr key={index}>
                                            <td>{unUsuario.usuario}</td> 
                                            <td>{unUsuario.apellido}</td>
                                            <td>{unUsuario.nombre}</td>
                                            <td>{unUsuario.mail}</td>
                                            <td>{unUsuario.rol}</td>
                                            {unUsuario.baja?<td>Si</td>:<td>No</td>}
                                            {
                                                !unUsuario.baja?
                                                <td><button type="button" onClick={() => borrador(unUsuario.usuario.toLowerCase()) }>Inhabilitar</button></td>:
                                                <td><button type="button" onClick={() => rehabilitar(unUsuario.usuario.toLowerCase()) }>rehabilitar</button></td>
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
