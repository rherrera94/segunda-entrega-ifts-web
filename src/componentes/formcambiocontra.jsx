export default function Cambiocontra({handleSubmit, ...props}) {
    return(
        <div class="container">  
        <form id="contact" action="" method="post">
            <h3 className="alta-usu">Cambio de contraseña</h3>
            <h4 className="alta-usu">Ingrese la información requerida para cambio de contraseña</h4>
            <fieldset>
            <input name="usuario" placeholder="Nombre de usuario" type="text" tabIndex="1" required autofocus  onChange={props.manejadorUsuarioCambio}/>
            </fieldset>
            <fieldset>
            <input name="contrasenia" placeholder="contraseña" type="password" tabIndex="4" required onChange={props.manejadorContraseniaCambio}/>
            </fieldset>
            <div className="boton-nuevo-usu">
            <button name="submit" type="submit" id="contact-submit" onClick={handleSubmit}>Cambiar contraseña</button>
            </div>
        </form>
        </div>
    
    )
    }