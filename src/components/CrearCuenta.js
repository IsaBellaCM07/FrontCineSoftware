import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import BannerPubliMemb from "./BannerPubliMemb";
import FormularioCrearCuenta from "./FormularioCrearCuenta";

function CrearCuenta() {

    /* Este codigo html llama a los componentes que forman este comoponente de crear cuenta */
    return (
        <div className="letra">
            {/* Componente del Banner */}
            <BannerPubliMemb/>
            {/* Componente del Formulario */}
            <FormularioCrearCuenta/>
        </div>
    );
}

export default CrearCuenta;
