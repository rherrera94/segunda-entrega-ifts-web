
import {BrowserRouter as Router, Route} from "react-router-dom";
import "normalize.css";
import './App.css';
import Navbar from './componentes/navbar';
import Noticias from "./componentes/noticias";
import Foot from "./componentes/piepagina";
import Cumpleanios from "./componentes/cumpleanios";
import Capacitacion from "./componentes/capacitacion";
import Contacto from "./componentes/contacto";
function App() {
  let meses=["Enero","febrero","marzo","abril","mayo","junio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
  let d=new Date();
  let fech=d.getDate()+" de "+meses[d.getMonth()-1]+" de "+d.getFullYear();
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
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
  );
}

export default App;
