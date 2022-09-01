import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { useNavigate } from 'react-router-dom'
import { filtrarCarrito, restaurarCarrito } from '../store/actions/app.actions'
import { base } from '../urlApi'

export const Carrito = () => {

  const carrito = useSelector(state => state.app.carrito)
  const dispatch = useDispatch()


  console.log('carrito',carrito)

  const handleDelete = (id)=> {

    console.log(id)

    const cartaLimpiar = carrito.filter(carta => carta.id !== id)
    localStorage.setItem('carta', JSON.stringify(cartaLimpiar))
    dispatch(filtrarCarrito(cartaLimpiar))
    console.log(carrito)

}


  let email = localStorage.getItem('email')

  const [datos, setDatos] = useState(null)

  const [estado, setEstado] = useState(0)

  const finalizar = async() => {


    try {

      const response = await axios.post(`${base}/api/carrito/finalizar`, {
        carrito:carrito,nombre:'alvaro', email:email, telefono:datos.telefono
      })

      console.log(response.data)

      if(response.data === 'enviado'){
        setEstado(1)

        dispatch(restaurarCarrito())
      }

      
    } catch (error) {
      console.log(error)
      
    }

  

  }



  const getData = async() => {

    if(email ){

      try {

        // const response = await axios.get(`${base}/api/auth/home/${email}`)
        const response = await axios.get(`${base}/api/auth/home/${email}`)
    
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


  let navigate = useNavigate();



  const home = () => {

    setEstado(0)
    navigate(`/`)
  }


  return (
    <div>

      {
        estado === 0 ?
        
        <>

                  {
                      carrito.map((item,i )=>( 
                        <div className='carritoCard' key={i}>

                        <p> nombre: {item.nombre} </p>
                        <p> precio: {item.precio} </p>
                        <p> cantidad: {item.cantidad} </p>
                        <button onClick={() => handleDelete(item.id) } > Eliminar del carrito </button>
                        </div>
                    
                      ))
                    }


                    <p>Productos : {carrito.length} </p>
                     
                     {
                    
                    email ? <button onClick={finalizar} >Finalizar compra</button> : <p>Logea para finalizar tu orden</p>
                     }
                  
                      
                      
        </> :
         <>
         <p> Listo! Tu orden se esta procesando y sera entregada en tu hogar</p>

         <button onClick={home} > Seguir comprando </button>
        </>


      }

    


    </div>
  )
}
