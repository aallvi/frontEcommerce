import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate,useParams  } from 'react-router-dom'


export const ActualizarProducto = () => {

  let params = useParams();

  console.log('params',params.id)

  const [producto, setProducto] = useState({
        nombre: '',
        descripcion: '',
        codigo: '',
        foto: '',
        precio: '', 
        stock: ''
    })

    const {nombre,descripcion,codigo,foto,precio,stock} = producto
  

        const consultarDatos = async() =>{

          const response = await fetch(`https://desafiocoder1234.herokuapp.com/api/productos/${params.id}`,{method: 'GET'})
          const data = await response.json()

          console.log('producto a actualizar',data)
          setProducto(data === Array ? data[0] : data)

      }

      useEffect(() => {
        consultarDatos()
      }, [])


      const actualizarProducto = async() => {
                console.log('yapo')
        const response = await fetch(`https://desafiocoder1234.herokuapp.com/api/productos/${params.id}`,{method: 'PUT', headers: { 'Content-Type': 'application/json' } ,body:JSON.stringify({nombre,descripcion,codigo,foto,precio,stock})})
          const data = await response.json()

            console.log('actualizacion',data)
      }


  console.log(producto.nombre)

  return (
    <div>

      <p>Actualizar Producto</p>   
        
        
        <div className='camposListarProducto' >
            <p>Nombre</p>
            <input value={nombre} onChange={ e => setProducto({...producto,nombre:e.target.value}) } />

        </div>
        <div className='camposListarProducto' >
            <p>Descripcion</p>
            <input value={descripcion} onChange={ e => setProducto({...producto,descripcion:e.target.value}) } />


        </div>
        <div className='camposListarProducto' >
            <p>Codigo</p>
            <input value={codigo} onChange={ e => setProducto({...producto,codigo:e.target.value}) } />


        </div>
        <div className='camposListarProducto' >
            <p>Foto</p>
            <input value={foto} onChange={ e => setProducto({...producto,foto:e.target.value}) } />


        </div>
        <div className='camposListarProducto' >
            <p>Precio</p>
            <input value={precio} onChange={ e => setProducto({...producto,precio:e.target.value}) } />


        </div>
        <div className='camposListarProducto' >
            <p>Stock</p>
            <input value={stock} onChange={ e => setProducto({...producto,stock:e.target.value}) } />


        </div>

        <button onClick={actualizarProducto} > Actualizar </button>



    </div>
  )
}
