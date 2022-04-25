import React from 'react'
import { BrowserRouter,Routes, Route, Link } from "react-router-dom";
import { NavBar } from '../components/NavBar';
import { ActualizarProducto } from '../screens/ActualizarProducto';
import { Homescreen } from '../screens/Homescreen';
import { ListarProducto } from '../screens/ListarProducto';


export const Navigation = () => {
  return (
    <div>
    <BrowserRouter>


    <NavBar/>


            <Routes>
                    <Route path="/" element={<Homescreen />} />
                    <Route path="/listar-productos" element={<ListarProducto />} />
                    <Route path="/actualizar-producto/:id" element={<ActualizarProducto />} />
                </Routes>
    </BrowserRouter>


    </div>
  )
}
