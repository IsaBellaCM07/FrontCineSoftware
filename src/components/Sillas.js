import React, {useState} from 'react';
import '../styles/SillasStyle.css';
import {useParams, Link} from 'react-router-dom';

function Sillas(props) {
    const {pelicula, horario} = useParams();
    const rows = ['A', 'B', 'C', 'D', 'E', 'F']; // Filas de asientos
    const seatsPerRow = 10; // Asientos por fila
    const seatPrice = 6000; // Precio por silla
    const [selectedSeats, setSelectedSeats] = useState([]); // Almacena los asientos seleccionados

    // Función para alternar la selección de asientos
    const toggleSeat = (row, seatNumber) => {
        const selectedSeat = `${row}${seatNumber}`;
        if (selectedSeats.includes(selectedSeat)) {
            setSelectedSeats(selectedSeats.filter(seat => seat !== selectedSeat));
        } else {
            setSelectedSeats([...selectedSeats, selectedSeat]);
        }
    };

    const calculateTotalPrice = () => {
        return selectedSeats.length * seatPrice;
    };

    return (
        <div className="seat-selection">
            <h1 className="title">{decodeURIComponent(pelicula)} a las {decodeURIComponent(horario)}</h1>
            <h2>Seleccione sus asientos</h2>
            <div className="screen">Pantalla</div>
            <div className="seating-plan">
                {rows.map((row) => (
                    <div key={row} className="row">
                        {Array.from({length: seatsPerRow}, (_, index) => (
                            <div
                                key={index}
                                className={`seat ${selectedSeats.includes(`${row}${index + 1}`) ? 'selected' : ''}`}
                                onClick={() => toggleSeat(row, index + 1)}
                            >
                                {row}{index + 1}
                            </div>
                        ))}
                    </div>
                ))}
            </div>

            <div className="information-room">
                <div className="information-room__types-seats-container">
                    <div className="information-room__type-seat">
                        <div className="room__seat--selected information-room__cube"></div>
                        <span>Mi Selección</span>
                    </div>
                    <div className="information-room__type-seat">
                        <div className="room__seat--available information-room__cube"></div>
                        <span>Silla Disponible</span>
                    </div>
                    <div className="information-room__type-seat">
                        <div className="room__seat--busy information-room__cube"></div>
                        <span>Silla Ocupada</span>
                    </div>
                </div>
            </div>

            <div className="selection-details">
                <span className="selection-text"> {selectedSeats.length > 1  ? `${selectedSeats.length} sillas seleccionadas: `
                    : `${selectedSeats.length} silla seleccionada: `}
</span>

                {selectedSeats.map((seat, index) => (
                    <span key={index} className="selected-seat">
                        {seat + " "}
                    </span>
                ))}
                <div className="cart">
                    <i className="fas fa-shopping-cart"></i>
                    <span className="cart-price">Valor total de las entradas: ${calculateTotalPrice()}</span>
                </div>

                <Link to="/compra">
                    <button className="continue-button">Continuar</button>
                </Link>

            </div>
        </div>
    );
}

export default Sillas;
