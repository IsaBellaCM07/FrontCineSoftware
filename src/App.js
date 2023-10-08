import React, {lazy, Suspense, useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import PaginaInicio from "./components/PaginaInicio";
import PeliculasAdmin from "./components/PeliculasAdmin";
import './App.css';
import AgregarPelicula from "./components/AgregarPelicula";

/*
React.lazy es para cargar un
componente dinámicamente, ese
componente y sus estilos se cargan de forma independiente y se
mantienen aislados del resto de la aplicación*/
const LazyCrearCuenta = lazy(() => import('./components/CrearCuenta'));

function App() {

    window.onload = function () {
        localStorage.setItem("user", JSON.stringify(null));
    }

    const iniciarUsuario = () => {
        const usuarioInicial = JSON.parse(localStorage.getItem("user"));
        if(usuarioInicial == null){
            return null;
        }else{
            return usuarioInicial;
        }
    }

    const [usuario, setUsuario] = useState(iniciarUsuario);

    function inicioSesion(nuevoUsuario){
        setUsuario(nuevoUsuario);
        localStorage.setItem("user", JSON.stringify(nuevoUsuario));
    }

    return (
        <div className="App">
            <BrowserRouter>
                {/* Renderiza el componente Header en la parte superior de la aplicación */}
                <Header usuario={usuario} inicioSesion={inicioSesion}/>

                {/* Crea un contenedor para el contenido principal */}
                <div className="container">
                    <Routes>
                        {/* Define una ruta para pagina de inicio */}
                        <Route exact path="/" element={<PaginaInicio/>}/>
                        {/* Define una ruta para pagina de peliculas del admin */}
                        <Route path="/cartelera" element={<PeliculasAdmin usuario={usuario}/>}/>
                        {/* Define una ruta para agregar peliculas */}
                        <Route path="/aniadir-pelicula" element={<AgregarPelicula/>}/>
                        {/* Define una ruta para crear cuenta*/}
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
