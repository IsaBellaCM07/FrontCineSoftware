import React, { useState } from 'react';
import '../styles/CrearCuentaStyle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import BannerPubliMemb from "./BannerPubliMemb";
import FormularioCrearCuenta from "./FormularioCrearCuenta";

function CrearCuenta() {


    return (
        <div className="letra">
            <BannerPubliMemb/>
            {/* Formulario */}
            <FormularioCrearCuenta/>
        </div>
    );
}

export default CrearCuenta;
