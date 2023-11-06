import React, { useState } from 'react';
import '../styles/TarjetaCombo.css';

function TarjetaCombo(props) {
    const [cantidad, setCantidad] = useState(0);

    const token = props.token;
    console.log(token)
    const restarCantidad = () => {
        if (cantidad > 0) {
            setCantidad(cantidad - 1);
        }
    };

    const sumarCantidad = () => {
        setCantidad(cantidad + 1);
    };

    return (
        <div className="combo-tarjeta">
            <div className="combo-imagen__img">
                <img src={props.imagen} alt={props.nombre} />
            </div>
            <div className="combo-nombre_texto">
                <h4>{props.nombre}</h4>
            </div>
            <p className="combo-descripcion">{props.descripcion}</p>
            <div className="combo-precio">
                {props.precio}
            </div>
            {token &&
                (<div className="combo-acciones">
                    <button
                        type="button"
                        className="combo-accion"
                        onClick={restarCantidad}
                    >
                        -
                    </button>
                    <span className="combo-cantidad">{cantidad}</span>
                    <button
                        type="button"
                        className="combo-accion"
                        onClick={sumarCantidad}
                    >
                        +
                    </button>
                </div>)
            }
        </div>
    );
}

export default TarjetaCombo;
