import React from "react";
import "../styles/BannerStyle.css"

function BannerPubliMemb(){
    /* Codigo html que forma el banner de publicidad */
    return(
        <div id="BannerRegister" className="ant-row">
            <div id="BannerRegister" className="ant-row">
                <div className="ant-col ant-col-24">
                    <h1 className="tipo-letra">¿Vas al menos 1 vez al cine por mes?</h1>
                    <div className="tipo-letra">¡Tener membresía te conviene!</div>
                </div>
                <div className="ant-col ant-col-24 ContentStep">
                    <div className="Step">
                        2 BOLETAS DE REGALO POR MES
                        <img src="https://cdn-icons-png.flaticon.com/512/1090/1090882.png" className="Icon" alt="Icono"/>
                    </div>
                    <div className="Plus">+</div>
                    <div className="Step">
                        DESCUENTOS EN BOLETERIA
                        <img src="https://cdn-icons-png.flaticon.com/512/792/792030.png" className="Icon" alt="Icono"/>
                    </div>
                    <div className="Plus">+</div>
                    <div className="Step">
                        DESCUENTOS EN CONFITERIA
                        <img src="https://cdn-icons-png.flaticon.com/512/3418/3418886.png" className="Icon" alt="Icono"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BannerPubliMemb;