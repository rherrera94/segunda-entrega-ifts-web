
export default function Login() {

    return (
        <div className="container-login">
        <div id="login-row" className="row justify-content-center align-items-center">
            <div id="login-column">
                <div className="box">
                    <div className="float">
                        <form className="form" action="">
                            <div className="form-group">
                                <label className="text-white">Usuario:</label><br/>
                                <input type="text" name="username" id="username" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label className="text-white">Contraseña:</label><br/>
                                <input type="text" name="password" id="password" className="form-control"/>
                            </div>
                            <div className="form-group boton-login">
                                <input type="submit" name="submit" className="btn btn-info btn-md" value="Ingresar"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

