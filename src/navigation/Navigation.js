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
import { Ordenes } from '../screens/Ordenes';
import { Categorias } from '../screens/Categorias';
import { CategoriasProductos } from '../screens/CategoriasProductos';
import { MisMensajes } from '../screens/MisMensajes';


export const Navigation = () => {


  
 



  return (
    <div>
    <BrowserRouter>


    <NavBar/>


     <div className='contenedorWeb'>

      
     <Routes>
                    <Route path="/" element={<Homescreen />} />
                    <Route path="/listar-productos" element={<ListarProducto />} />
                    <Route path="/actualizar-producto/:id" element={<ActualizarProducto />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/perfil" element={<Perfil />} />
                    <Route path="/carrito" element={<Carrito />} />
                    <Route path="/ordenes" element={<Ordenes />} />
                    <Route path="/categorias" element={<Categorias />} />
                    <Route path="/categorias/:categorias" element={<CategoriasProductos />} />
                    <Route path="/mensajes" element={<MisMensajes />} />
                </Routes>

     </div>

    </BrowserRouter>


    </div>
  )
}
