import empleados from '../datos/variables'
export default function Cumpleanios() {
    if (empleados.length===0){
        return(
            <div>
                <h3>Este mes no cumpleaños ningún compañero</h3>
            </div>
        )
        
    }else{
        return (
            <div className="cumple-tabla">
                <h2> Festejemos junto a nuestros compañeros este día tan especial</h2><br/>
                <table className="tabla-cumpleanios">
                        <tbody>
                            <tr> 
                                <th>Día</th> 
                                <th>Empleado</th> 
                                <th>Interno</th>
                            </tr>
                            {empleados.map((unEmpleado, index) => {
                                let d=new Date(unEmpleado.cumpleanios);
                                let dcomp=new Date();
                                if(d.getMonth()===dcomp.getMonth()){  
                                    let dia=d.getDate();
                                    return (
                                        <tr key={index}>
                                            <td>{dia}</td> 
                                            <td>{unEmpleado.nombre}</td>
                                            <td>{unEmpleado.interno}</td>
                                        </tr>         
                                        );
                                }
                                return null;
                            })}
                        </tbody>
                </table>
            </div>
        )    
    }
    
}
