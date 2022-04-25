import React, { useEffect, useState } from 'react'
import { Card } from '../components/Card'

export const Homescreen = () => {

    const [productos, setProductos] = useState([])

    const consultarDatos = async() =>{

        const response = await fetch('https://primerapreentrega.herokuapp.com/api/productos',{method: 'GET'})
        const data = await response.json()
  
        // console.log(data)
        setProductos(data)

    }

     useEffect(() => {

        consultarDatos()
    
     }, [])
     
     console.log('productos',productos)
 
     const eliminar = async (id) => {

   

      const response = await fetch(`https://primerapreentrega.herokuapp.com/api/productos/${id}`,{method: 'DELETE'})
      const data = await response.json()

      console.log(data)
     
      consultarDatos()

  

    
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
                 <Card key={item.id} {...item} eliminar={eliminar} />
             ))
         }
          

          </div>

       
          
      </div>


    </div>


  )
}
