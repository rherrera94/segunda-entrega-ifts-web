
import Logo from '../images/dalw.jpg';
export default function Login({handleSubmit, ...props}) {

    return (
        <div className="login-form">
            <div className="img-dalw">
                <img src={Logo} alt="Img-dalw" className="img-dalw-espacio" style={{width:"100%"}}/>
            </div>
            <div className="centro-login">
                <div className="form-group ">
                    <input type="text" className="form-control" placeholder="Usuario " id="UserName"  value={props.nombreUsuario} onChange={props.manejadorUsuarioCambio}/>
                </div>
                <div className="form-group log-status">
                    <input type="password" className="form-control" placeholder="Contraseña" id="Passwod" value={props.contrasenia} onChange={props.manejadorContraseniaCambio}/>
                </div>
            </div>
            
            <button type="button" className="log-btn" onClick={handleSubmit} >Log in</button>  
      </div>      
    )
}

