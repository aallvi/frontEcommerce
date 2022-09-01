import React, { useState } from 'react'
import { base } from '../urlApi'

export const ListarProducto = () => {


    const [datos, setDatos] = useState({
        nombre: '',
        descripcion: '',
        codigo: '',
        foto: '',
        precio: '', 
        stock: '',
        categoria:''
    })

    const {nombre,descripcion,codigo,foto,precio,stock,categoria} = datos

    const agregarProducto = async () => {

        const response = await fetch(`${base}/api/productos`,{
            method: 'POST',headers: { 'Content-Type': 'application/json' } ,body:JSON.stringify({nombre,descripcion,codigo,foto,precio,stock,categoria})
                   
        })
        const data = await response.json()
       
        console.log(data)
                
        setDatos({
            nombre: '',
            descripcion: '',
            codigo: '',
            foto: '',
            precio: '', 
            stock: '',
            categoria:''
        })

    }

    console.log(datos)


  return (
    <div className='contenedor' >
     <p>Agregar un Producto</p>   
        
        
        <div className='camposListarProducto' >
            <p>Nombre</p>
            <input value={nombre} onChange={ e => setDatos({...datos,nombre:e.target.value}) } />

        </div>
        <div className='camposListarProducto' >
            <p>categoria</p>
            <input value={categoria} onChange={ e => setDatos({...datos,categoria:e.target.value}) } />

        </div>
        <div className='camposListarProducto' >
            <p>Descripcion</p>
            <input value={descripcion} onChange={ e => setDatos({...datos,descripcion:e.target.value}) } />


        </div>
        <div className='camposListarProducto' >
            <p>Codigo</p>
            <input value={codigo} onChange={ e => setDatos({...datos,codigo:e.target.value}) } />


        </div>
        <div className='camposListarProducto' >
            <p>Foto</p>
            <input value={foto} onChange={ e => setDatos({...datos,foto:e.target.value}) } />


        </div>
        <div className='camposListarProducto' >
            <p>Precio</p>
            <input value={precio} onChange={ e => setDatos({...datos,precio:e.target.value}) } />


        </div>
        <div className='camposListarProducto' >
            <p>Stock</p>
            <input value={stock} onChange={ e => setDatos({...datos,stock:e.target.value}) } />


        </div>

        <button onClick={agregarProducto} > Agregar </button>
     
        
    
    </div>
  )
}
