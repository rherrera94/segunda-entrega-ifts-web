export default function Formaltausu({handleSubmit, ...props}) {
return(
    <div className="container">  
    <form id="contact" action="" method="post">
        <h3 className="alta-usu">Alta Usuario</h3>
        <h4 className="alta-usu">Ingrese la información requerida para el alta de usuario</h4>
        <div>
        <input name="usuario" placeholder="Nombre de usuario" type="text" tabIndex="1" required autoFocus value={props.nombreUsuario} onChange={props.manejadorUsuarioCambio}/>
        </div>
        <div>
        <input name="email" placeholder="email" type="email" tabIndex="2" required value={props.email} onChange={props.manejadorEmailCambio}/>
        </div>
        <div>
        <input name="cuil" placeholder="cuil" type="text" tabIndex="3" required value={props.cuil} onChange={props.manejadorCuilCambio}/>
        </div>
        <div>
        <input name="contrasenia" placeholder="contraseña" type="password" tabIndex="4" required value={props.constrasenia} onChange={props.manejadorContraseniaCambio}/>
        </div>
        <div>
        <label for="rol">Rol de usuario: </label>
        <select name="rol" required value={props.rol} onChange={props.manejadorRolCambio} className="rolusu">
            <option>administrador</option>
            <option>empleado</option>
        </select>
        
        </div>
        <div className="boton-nuevo-usu">
        <button name="submit" type="submit" id="contact-submit" onClick={handleSubmit}>Crear Usuario</button>
        </div>
    </form>
    </div>

)
}