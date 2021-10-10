export default function Formaltausu({handleSubmit, ...props}) {
return(
    <div class="container">  
    <form id="contact" action="" method="post">
        <h3 className="alta-usu">Alta Usuario</h3>
        <h4 className="alta-usu">Ingrese la información requerida para el alta de usuario</h4>
        <fieldset>
        <input name="usuario" placeholder="Nombre de usuario" type="text" tabIndex="1" required autofocus value={props.nombreUsuario} onChange={props.manejadorUsuarioCambio}/>
        </fieldset>
        <fieldset>
        <input name="email" placeholder="email" type="email" tabIndex="2" required value={props.email} onChange={props.manejadorEmailCambio}/>
        </fieldset>
        <fieldset>
        <input name="cuil" placeholder="cuil" type="text" tabIndex="3" required value={props.cuil} onChange={props.manejadorCuilCambio}/>
        </fieldset>
        <fieldset>
        <input name="contrasenia" placeholder="contraseña" type="password" tabIndex="4" required value={props.constrasenia} onChange={props.manejadorContraseniaCambio}/>
        </fieldset>
        <fieldset>
        <input name="rol" placeholder="ingrese el rol" type="text" tabIndex="5" required value={props.rol} onChange={props.manejadorRolCambio}/>
        </fieldset>
        <div className="boton-nuevo-usu">
        <button name="submit" type="submit" id="contact-submit" onClick={handleSubmit}>Crear Usuario</button>
        </div>
    </form>
    </div>

)
}