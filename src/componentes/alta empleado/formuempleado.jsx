export default function Formaltaemp({handleSubmit, ...props}) {
    return(
        <div className="container">  
        <form id="contact" action="" method="post">
            <h3 className="alta-usu">Alta Empleado</h3>
            <h4 className="alta-usu">Ingrese la información requerida para el alta del empleado</h4>
            <fieldset>
            <input name="nombre" placeholder="Nombre del empleado" type="text" tabIndex="1" required autoFocus value={props.nombre} onChange={props.manejadorNombreCambio}/>
            </fieldset>
            <fieldset>
            <input name="apellido" placeholder="Apellido del empleado" type="text" tabIndex="2" required value={props.apellido} onChange={props.manejadorApellidoCambio}/>
            </fieldset>
            <fieldset>
            <input name="cuil" placeholder="cuil" type="text" tabIndex="3" required value={props.cuil} onChange={props.manejadorCuilCambio}/>
            </fieldset>
            <fieldset>
            <input name="mail" placeholder="email del empleado" type="email" tabIndex="4" required value={props.mail} onChange={props.manejadorMailCambio}/>
            </fieldset>
            <fieldset>
            <input name="cargo" placeholder="ingrese el cargo" type="text" tabIndex="5" required value={props.cargo} onChange={props.manejadorCargoCambio}/>
            </fieldset>
            <fieldset>
            <label for="nacimiento">Fecha de nacimiento</label><input name="nacimiento"  type="date"  required value={props.nacimiento} onChange={props.manejadorNacimientoCambio}/>
            </fieldset>
            <div className="boton-nuevo-usu">
            <button name="submit" type="submit" id="contact-submit" onClick={handleSubmit}>Alta empleado</button>
            </div>
        </form>
        </div>
    
    )
    }