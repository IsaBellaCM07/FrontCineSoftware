import React from 'react';
import './App.css';
import Header from './components/Header';
import {BrowserRouter} from "react-router-dom";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <div className="container">
                    /*Aqui va todo el cuerpo de la app*/
                </div>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}

export default App;
