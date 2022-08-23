import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { base } from '../urlApi'

export const Carrito = () => {

  const carrito = useSelector(state => state.app.carrito)

  console.log('carrito',carrito)

  let email = localStorage.getItem('email')

  const [datos, setDatos] = useState(null)

  const finalizar = async() => {


    try {

      const response = await axios.post(`${base}/api/carrito/finalizar`, {
        carrito:carrito,nombre:'alvaro', email:'aleiva97@gmail.com', telefono:datos.telefono
      })

      // console.log(response.data)

      
    } catch (error) {

      
    }

  

  }



  const getData = async() => {

    if(email ){

      try {

        const response = await axios.get(`${base}/api/carrito/home/${email}`)
    
        setDatos(response.data[0])
        console.log(response.data[0])

     
        
    } catch (error) {
        console.log(error)
    }




    }

   
   


  }

  useEffect(() => {

  
    getData()

    
  

  }, [])


  return (
    <div>

      {
        carrito.map(item =>( 
          <div key={item._id}>

          <p> nombre {item.nombre} </p>
          <p> precio {item.precio} </p>
          </div>
      
        ))
      }


      <p>Productos : {carrito.length} </p>

      <button onClick={finalizar} >Finalizar compra</button>


    </div>
  )
}
