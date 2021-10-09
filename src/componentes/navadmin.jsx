import React from "react";
import { Link } from "react-router-dom";
export default function Navadmin() {
    return (
        <nav className="navbar">
            <div className="enlaces">
                <ul className="barra-links">
                    <li><Link to="/altausu">Alta usuario</Link></li>
                    <li><Link to="/consultausu">consulta usuario</Link></li>
                    <li><Link to="/altaempleado">Alta empleado</Link></li>
                    <li><Link to="/consultaempleado">consulta empleados</Link></li>
                </ul>
            </div>
        </nav>
    )
}