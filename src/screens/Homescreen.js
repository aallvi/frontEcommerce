import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Card } from '../components/Card'
import { base } from '../urlApi'

export const Homescreen = () => {

    const [productos, setProductos] = useState([])


  const carrito = useSelector(state => state.app.carrito)

  console.log('carrito',carrito)


    console.log(productos)

    const consultarDatos = async() =>{

        const response = await fetch(`${base}/api/productos`,{method: 'GET'})
        const data = await response.json()
  
        // console.log(data)
        setProductos(data)

    }

     useEffect(() => {

        consultarDatos()
    
     }, [])
     
     
 
     const eliminar = async (id) => {

   

      const response = await fetch(`${base}/api/productos/${id}`,{method: 'DELETE'})
      const data = await response.json()

      console.log('data',data)
     
      consultarDatos()
      console.log('products',productos)

  

    
    // console.log(id)

  }



  return (
    <div className='hola' >
        
        <h1>Digital Store</h1>

      <div> 

          <p> Productos </p>

          <div className='ContendorProductos' >
          {
             productos.map(item => (
                 <Card key={item._id} {...item} eliminar={eliminar} />
             ))
         }
          

          </div>

       
          
      </div>


    </div>


  )
}
