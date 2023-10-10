import React from "react";
import '../styles/FooterStyle.css';
import {Link, useLocation} from "react-router-dom";


function Footer(){

    /* Codigo html que forma todo la estructura del Footer */
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