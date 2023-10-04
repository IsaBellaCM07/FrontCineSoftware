import React from "react";
import '../styles/FooterStyle.css';
import {Link, useLocation} from "react-router-dom";


function Footer(){

    const location = useLocation();

    if(location.pathname==="/iniciar-sesion"){
        return null;
    }

    return(
        <div className="footer">
            <footer>
                <Link to="/" className="link"><h2>CINECITO</h2></Link>
                <p>Hecho por MORALMA</p>
            </footer>
        </div>
    );

}

export default Footer;