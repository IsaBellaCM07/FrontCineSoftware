import React, {lazy, Suspense} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import PaginaInicio from "./components/PaginaInicio";
import PeliculasAdmin from "./components/PeliculasAdmin";
import './App.css';

/*
React.lazy es para cargar un
componente dinámicamente, ese
componente y sus estilos se cargan de forma independiente y se
mantienen aislados del resto de la aplicación*/
const LazyLogin = lazy(() => import('./components/Login'));
const LazyCrearCuenta = lazy(() => import('./components/CrearCuenta'));

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                {/* Renderiza el componente Header en la parte superior de la aplicación */}
                <Header/>

                {/* Crea un contenedor para el contenido principal */}
                <div className="container">
                    <Routes>
                        {/* Define una ruta para pagina de inicio */}
                        <Route exact path="/" element={<PaginaInicio/>}/>
                        {/* Define una ruta para "/iniciar-sesion" */}
                        <Route path="/cartelera" element={<PeliculasAdmin/>}/>

                        <Route path="/crear-cuenta"
                               element={<LazyCrearCuenta/>}
                        />

                    </Routes>
                </div>

                {/* Renderiza el componente Footer en la parte inferior de la aplicación */}
                <Footer/>
            </BrowserRouter>
        </div>
    );
}

export default App;
