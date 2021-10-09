import servicios from '../servicio/services';
import axios from 'axios';
import React from 'react';
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
                console.log(e.message);
            }
        }
        listadoUsuarios();
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
                            </tr>
                            {information.map((unUsuario, index) => {
                               
                                    return (
                                        <tr key={index}>
                                            <td>{unUsuario.usuario}</td> 
                                            <td>{unUsuario.apellido}</td>
                                            <td>{unUsuario.nombre}</td>
                                            <td>{unUsuario.mail}</td>
                                            <td>{unUsuario.rol}</td>
                                            <td>{unUsuario.baja}</td>
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
