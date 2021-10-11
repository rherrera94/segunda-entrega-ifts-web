export default function Formaltacap({handleSubmit, ...props}) {
    return(
        <div className="container">  
        <form id="contact" action="" method="post">
            <h3 className="alta-usu">Alta de capacitación</h3>
            <h4 className="alta-usu">Ingrese la información requerida para el alta de la capacitación</h4>
            <fieldset>
            <input name="curso" placeholder="Nombre del curso" type="text" tabIndex="1" required autoFocus value={props.curso} onChange={props.manejadorCursoCambio}/>
            </fieldset>
            <fieldset>
            <input name="fechainicio" type="date" tabIndex="5" required value={props.fechainicio} onChange={props.manejadorFechaCambio}/>
            </fieldset>
            <div className="boton-nuevo-usu">
            <button name="submit" type="submit" id="contact-submit" onClick={handleSubmit}>Crear Capacitación</button>
            </div>
        </form>
        </div>
    
    )
    }