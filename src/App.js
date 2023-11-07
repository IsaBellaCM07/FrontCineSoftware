import React, {lazy, Suspense, useEffect, useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import PaginaInicio from "./components/PaginaInicio";
import PeliculasAdmin from "./components/PeliculasAdmin";
import './App.css';
import AgregarPelicula from "./components/AgregarPelicula";
import Confiteria from "./components/CuadriculaTarjeta";
import Sillas from "./components/Sillas";


/*
React.lazy es para cargar un
componente dinámicamente, ese
componente y sus estilos se cargan de forma independiente y se
mantienen aislados del resto de la aplicación*/
const LazyCrearCuenta = lazy(() => import('./components/CrearCuenta'));

function App() {

    function inicializarToken() {
        if(localStorage.getItem("user")){
            return localStorage.getItem("user");
        }else{
            return "";
        }
    }

    const [token, setToken] = useState(inicializarToken);

    function convertirToken() {

        if(token !== ""){
            const aux = token.split('.');
            const aux2 = atob(aux[1])
            return aux2;
        }
        return "";
    }


    /* Metodo que setea el usuario cada vez que inicia sesión */
    function inicioSesion(nuevoUsuario){
        setToken(nuevoUsuario);
        localStorage.setItem("user", nuevoUsuario);
    }

    /* Este codigo html llama a los componentes que forman toda la app */
    return (
        <div className="App">
            <BrowserRouter>
                {/* Renderiza el componente Header en la parte superior de la aplicación */}
                <Header usuario={convertirToken()} inicioSesion={inicioSesion}/>

                {/* Crea un contenedor para el contenido principal */}
                <div className="container">
                    <Routes>
                        {/* Define una ruta para pagina de inicio */}
                        <Route exact path="/" element={<PaginaInicio/>}/>
                        {/* Define una ruta para pagina de peliculas del admin */}
                        <Route path="/cartelera" element={<PeliculasAdmin usuario={convertirToken()}/>}/>
                        {/* Define una ruta para agregar peliculas */}
                        <Route path="/aniadir-pelicula" element={<AgregarPelicula token={token}/>}/>
                        {/* Define una ruta para crear cuenta*/}
                        <Route path="/crear-cuenta"
                               element={<LazyCrearCuenta/>}
                        />
                        <Route path="/confiteria"
                               element={<Confiteria token={token}/>}
                        />
                        <Route path="/teatros"
                               element={<Sillas/>}
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
