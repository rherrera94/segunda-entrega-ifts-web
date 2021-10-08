
import Logo from '../images/dalw.jpg';
export default function Login({handleSubmit, ...props}) {

    return (
        <div class="login-form">
            <div class="img-dalw">
                <img src={Logo} alt="Img-dalw" className="img-dalw-espacio" style={{width:"100%"}}/>
            </div>
            <div class="centro-login">
                <div class="form-group ">
                    <input type="text" class="form-control" placeholder="Usuario " id="UserName"  value={props.nombreUsuario} onChange={props.manejadorUsuarioCambio}/>
                </div>
                <div class="form-group log-status">
                    <input type="password" class="form-control" placeholder="Contraseña" id="Passwod" value={props.contrasenia} onChange={props.manejadorContraseniaCambio}/>
                </div>
            </div>
            
            <button type="button" class="log-btn" onClick={handleSubmit} >Log in</button>  
      </div>      
    )
}

