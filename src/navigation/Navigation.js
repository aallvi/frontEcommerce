import React from 'react'
import { BrowserRouter,Routes, Route, Link } from "react-router-dom";
import { NavBar } from '../components/NavBar';
import { ActualizarProducto } from '../screens/ActualizarProducto';
import { Home, Perfil } from '../screens/Perfil';
import { Homescreen } from '../screens/Homescreen';
import { ListarProducto } from '../screens/ListarProducto';
import { Login } from '../screens/Login';
import { Register } from '../screens/Register';
import { Carrito } from '../screens/Carrito';


export const Navigation = () => {


  
 



  return (
    <div>
    <BrowserRouter>


    <NavBar/>


            <Routes>
                    <Route path="/" element={<Homescreen />} />
                    <Route path="/listar-productos" element={<ListarProducto />} />
                    <Route path="/actualizar-producto/:id" element={<ActualizarProducto />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/perfil" element={<Perfil />} />
                    <Route path="/carrito" element={<Carrito />} />
                </Routes>
    </BrowserRouter>


    </div>
  )
}
