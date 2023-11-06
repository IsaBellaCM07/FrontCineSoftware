import React, { useState } from 'react';
import '../styles/SillasStyle.css';

function Sillas() {
    const rows = ['A', 'B', 'C', 'D', 'E', 'F']; // Filas de asientos
    const seatsPerRow = 10; // Asientos por fila
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

    return (
        <div className="seat-selection">
            <h2>Seleccione sus asientos</h2>
            <div className="screen">Pantalla</div>
            <div className="seating-plan">
                {rows.map((row) => (
                    <div key={row} className="row">
                        {Array.from({ length: seatsPerRow }, (_, index) => (
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
        </div>
    );
}

export default Sillas;

