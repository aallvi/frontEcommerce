import React, { useEffect, useState } from 'react'
import { Card } from '../components/Card'

export const Homescreen = () => {

    const [productos, setProductos] = useState([])

    console.log(productos)

    const consultarDatos = async() =>{

        const response = await fetch('http://localhost:8080/api/productos',{method: 'GET'})
        const data = await response.json()
  
        // console.log(data)
        setProductos(data)

    }

     useEffect(() => {

        consultarDatos()
    
     }, [])
     
     
 
     const eliminar = async (id) => {

   

      const response = await fetch(`http://localhost:8080/api/productos/${id}`,{method: 'DELETE'})
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
