import cursos from '../datos/cursos'
export default function Capacitacion() {
    if (cursos.length===0){
        return(
            <div>
                <h3>En este momento no se han encontrado cursos</h3>
            </div>
        )
        
    }else{
        return (
            <div className="cumple-tabla">
                <h2> Cursos disponibles para los empleados de la empresa</h2><br/>
                <table className="tabla-cumpleanios">
                        <tbody>
                            <tr> 
                                <th>Fecha Inicio</th> 
                                <th>Curso</th> 
                            </tr>
                            
                            {cursos.map((unCurso, index) => {
                                let d=new Date(unCurso.fechainicio);
                                let dcomp=new Date();
                                if(d.getMonth()>=dcomp.getMonth()){  
                                    let dia=d.getDate()+"/"+d.getMonth()+"/"+d.getFullYear();
                                    return (
                                        <tr key={index}>
                                            <td>{dia}</td> 
                                            <td>{unCurso.curso}</td>
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