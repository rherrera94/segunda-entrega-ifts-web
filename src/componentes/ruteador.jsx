import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from './navbars/navbar';
import Navadmin from "./navbars/navadmin";
import Noticias from "./noticias/noticias";
import Foot from "./piepagina";
import Cumpleanios from "./cumpleanios/cumpleanios";
import Capacitacion from "./capacitacion/capacitacion";
import Contacto from "./contacto/contacto";
import Consultausu from "./consulta usuario/consultausu";
import Altausu from "./alta usuario/altausu";
import Altaempleado from "./alta empleado/altaempleado";
import Consultaemp from "./consulta empleado/consultaemp";
import Cambioc from "./contrasenia/cambiocontraseña";
export default function Ruteador({manejadorDeslogeo,...props}) {
    let meses=["Enero","febrero","marzo","abril","mayo","junio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
    let d=new Date();
    let fech=d.getDate()+" de "+meses[d.getMonth()-1]+" de "+d.getFullYear();
    return (
        <div>
            <Router>
                <div className="deslogeo-salir"> 
                    <button onClick={manejadorDeslogeo}>Salir</button>
                </div>
                <Navbar></Navbar>
                {
                    props.admin?<Navadmin></Navadmin>:<div></div> 
                }
                <div className="container-fecha">
                    <div className="cointainer-fecha-linea"></div>
                    <div className="container-fecha-fecha">{fech}</div>
                    <div className="cointainer-fecha-linea"></div>
                </div>
                <Route exact path="/" component={Noticias}/>
                <Route exact path="/capacitacion" component={Capacitacion}/>
                <Route exact path="/cumpleanios" component={Cumpleanios}/>
                <Route exact path="/telefonos-utiles" component={Contacto}/>
                {props.admin? <Route exact path="/consultausu" component={Consultausu}/>:null}
                {props.admin? <Route exact path="/altausu" component={Altausu}/>:null}
                {props.admin? <Route exact path="/altaempleado" component={Altaempleado}/>:null}
                {props.admin? <Route exact path="/consultaempleado" component={Consultaemp}/>:null}
                {props.admin? <Route exact path="/cambiocontrasenia" component={Cambioc}/>:null}
            </Router>
            <Foot></Foot>
        </div>
        
        
    )
}