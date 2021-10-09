import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from './navbar';
import Navadmin from "./navadmin";
import Noticias from "./noticias";
import Foot from "./piepagina";
import Cumpleanios from "./cumpleanios";
import Capacitacion from "./capacitacion";
import Contacto from "./contacto";
export default function Ruteador({manejadorDeslogeo,...props}) {
    let meses=["Enero","febrero","marzo","abril","mayo","junio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
    let d=new Date();
    let fech=d.getDate()+" de "+meses[d.getMonth()-1]+" de "+d.getFullYear();
    console.log(props)
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
            </Router>
            <Foot></Foot>
        </div>
        
        
    )
}