import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const Ordenes = () => {

  const email = localStorage.getItem('email')

  const [ordenes, setOrdenes] = useState([])


    const getOrdenes = async() => {
      

      try {

        const response = await axios.get(`http://localhost:8083/api/ordenes/${email}`)

        setOrdenes(response.data)
        
      } catch (error) {
         console.log(error)
      }


    }


    useEffect(() => {
      getOrdenes()
    }, [])
    



  return (
    <div>
      {
        ordenes.length === 0 && email && <p>No tienes ordenes</p>
      }
      {
        ordenes.length === 0 && !email && <p>Ingresa para ver tus ordenes</p>
      }
           
          {
            ordenes.length > 0 &&
            
            <div>

                  {
                      ordenes.map((item,i )=>( 
                        <div className='ordenes' key={i}>

                        {/* <p> nombre {item.nombre} </p> */}
                        <p> Fecha: {item.fecha} </p>
                        <p> Total pagado: {item.total} </p>

                        {
                          item.productos.map((item,i )=>( 
                            <div className='ordenesProductos' key={i}>

                              <h2>Productos:</h2>
    
                            {/* <p> nombre {item.nombre} </p> */}
                            <p> nombre: {item.nombre} </p>
                            <p> cantidad: {item.cantidad} </p>
    
                            
                            </div>
                        
                          ))
                        }
                       
                        </div>
                    
                      ))
                    }



            </div>
          }
                  

    </div>
  )
}
