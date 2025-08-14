import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/js/bootstrap.min.js' /* lógica de js para los componentes de bootstrap */
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Inicio from './pages/Inicio.jsx'
import Productos from './pages/Productos.jsx'
import Servicios from './pages/Servicios.jsx'
import Nosotros from './pages/Nosotros.jsx'
import Contacto from './pages/Contacto.jsx'
import NoEncontrado from './pages/NoEncontrado.jsx'
import Navbar from './components/Rutas/Navbar.jsx'


createRoot(document.getElementById('root')).render(
    <BrowserRouter>

        {/* Fuera Routes pero dentro BrowserRouter */}
        <Navbar />

        <div className="container">
            <Routes> {/* switch */}
                <Route path="/" element={<Inicio />} /> {/* case */}
                <Route path="/productos" element={<Productos />} /> {/* case */}
                <Route path="/servicios" element={<Servicios />} /> {/* case */}
                <Route path="/nosotros" element={<Nosotros />} /> {/* case */}
                <Route path="/contacto" element={<Contacto />} /> {/* case */}
                <Route path="*" element={<NoEncontrado />} /> {/* default */}
            </Routes>
        </div>
    
    </BrowserRouter>
)
