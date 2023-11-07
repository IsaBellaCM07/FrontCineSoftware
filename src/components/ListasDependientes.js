import React, { Component } from 'react';
import "../styles/ListasDependientesStyle.css";

class ListasDependientes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ciudad: 'defecto', // Valor predeterminado para el país
            teatros: {
                defecto: ['._.'],
                bogota: ['Atlantis', 'Floresta', 'Altavista'],
                medellin: ['Arkadia', 'El tesoro', 'Bosque Plaza'],
                cali: ['Pacific Mall', 'Simon Bolivar', 'La Estacion'],
                armenia: ['Unicentro', 'Portal del Quindio', 'Plaza Flora'],
                pereira: ['Unicentro', 'Parque Arboleda', 'Bolivar Plaza']
            }
        };
    }

    recargarLista = (event) => {
        this.setState({ ciudad: event.target.value });
    };

    render() {
        const { ciudad, teatros} = this.state;

        return (
            <div className="listas">
                <label htmlFor="ciudades" className="descrip">Seleccione una ciudad:  </label>
                <select id="ciudades" name="ciudad" className="combos" onChange={this.recargarLista} value={ciudad}>
                    <option value="defecto" selected>Escoja</option>
                    <option value="bogota">Bogotá</option>
                    <option value="medellin">Medellín</option>
                    <option value="cali">Cali</option>
                    <option value="armenia">Armenia</option>
                    <option value="pereira">Pereira</option>
                </select>

                <label htmlFor="teatros" className="descrip">Seleccion un teatro:  </label>
                <select id="teatros" name="teatro" className="combos">
                    {teatros[ciudad].map((teatro, index) => (
                        <option key={index} value={teatro}>
                            {teatro}
                        </option>
                    ))}
                </select>
            </div>
        );
    }
}

export default ListasDependientes;
