import React from "react";
import TarjetaCombo from "./TarjetaCombo";
import "../styles/CuadriculaTarjetaStyle.css";

function CuadriculaTarjeta(props) {
    const tarjetas = [
        {
            imagen: "https://assets.cinemark-core.com/5db771be04daec00076df3f5/vista/concessions/61575a34166e980008dedb3e/common/4460-1678814603535.jpg",
            nombre: "Combo Mío Membresía Gold",
            descripcion: "Crispeta Grande de 230 Gr + 1 Bebida Grande de 798 ml",
            precio: "$ 27.800",
        },
        {
            imagen: "https://assets.cinemark-core.com/5db771be04daec00076df3f5/vista/concessions/61575a34166e980008dedb40/common/4461-1678814527154.jpg",
            nombre: "Combo Amigos Membresía Gold",
            descripcion: "Crispeta Mega de 250 Gr + 2 Bebidas Medianas de 532 ml + 2 Perros Calientes",
            precio: "$ 60.700",
        },
        {
            imagen: "https://assets.cinemark-core.com/5db771be04daec00076df3f5/vista/concessions/61575a34166e980008dedb3d/common/4459-1678814547284.jpg",
            nombre: "Combo Tú y Yo Membresía Gold",
            descripcion: "Crispeta Grande de 230 Gr + 2 Bebidas Grandes de 798 ml",
            precio: "$ 38.300",
        },
        {
            imagen:"https://assets.cinemark-core.com/5db771be04daec00076df3f5/vista/concessions/61575a34166e980008dedb42/common/4464-1677674653808.jpg",
            nombre:"Combo Kids Membresía Gold",
            descripcion:"Cajita de Crispetas de 95 Gr, Bebida Pequeña de 384 ml, Chocolatina Jet de 12 Gr",
            precio:"$ 17.800",

        },
        {
            imagen:"https://assets.cinemark-core.com/5db771be04daec00076df3f5/vista/concessions/61575a34166e980008dedb3f/common/4463-1677675067020.jpg",
            nombre:"Combo Snack Nachos Membresía Gold",
            descripcion:"Bebida Mediana de 532 ml, Nachos de 60 Gr y Queso Cheddar de 80 Gr",
            precio:"$ 22.200",

        },
        {
            imagen:"https://assets.cinemark-core.com/5db771be04daec00076df3f5/vista/concessions/61575a34166e980008dedb41/common/4462-1677675081423.jpg",
            nombre:"Combo Snack Perro Membresía Gold",
            descripcion:"Bebida Mediana de 532 ml y Perro Caliente ",
            precio:"$ 22.200",

        },
    ];

    return (
        <div className="combos-con-descuento">
            <h1>Combos con hasta 20% de descuento por ser socio CINE CLUB GOLD</h1>
            <div className="container-amarillo">
                <div className="combos-grid">
                    {tarjetas.map((tarjeta, index) => (
                        <TarjetaCombo
                            key={index}
                            imagen={tarjeta.imagen}
                            nombre={tarjeta.nombre}
                            descripcion={tarjeta.descripcion}
                            precio={tarjeta.precio}
                            token={props.token}
                        />
                    ))}
                </div>
                {props.token &&
                    (<div>
                        <button type="button" className="car-button">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png"
                            className="img-boton"
                        />
                        </button>
                    </div>)}
            </div>
        </div>
    );
}

export default CuadriculaTarjeta;
