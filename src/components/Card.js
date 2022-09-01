import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate,useParams  } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { agregarCarrito, filtrarCarrito } from '../store/actions/app.actions';
import Swal from 'sweetalert2'

export const Card = ({codigo,descripcion,foto,nombre,precio,stock,_id,id ,eliminar}) => {


  let navigate = useNavigate();
  

  const dispatch = useDispatch()
  
  const carta = useSelector(state => state.app.carrito)




  useEffect(() => {

        
      localStorage.setItem('carta', JSON.stringify(carta))

 

  }, [carta])


  const actualizar = () => {
    navigate(`actualizar-producto/${id ? id : _id}`)

  }

  const handleDelete = (id)=> {

    console.log(id)

    const cartaLimpiar = carta.filter(item => item.id !== id)
    localStorage.setItem('carta', JSON.stringify(cartaLimpiar))
    dispatch(filtrarCarrito(cartaLimpiar))
    // console.log(carrito)

}

  const carrito = (obj) => {

    let ob = obj

    const arr = carta.find(item => item.id === obj.id)

    console.log('arr',arr)

    if(arr){
    
      handleDelete(arr.id)
      let nuevaCantidad = arr.cantidad+1


      arr.cantidad = nuevaCantidad
      arr.precio = arr.cantidad * precio
      dispatch(agregarCarrito(arr))
      Swal.fire('Agregado al carrito')
      return
    }

    Swal.fire('Agregado al carrito')

    dispatch(agregarCarrito(ob))

    console.log(obj)
  }


  return (
    <div className='card' >

      <div className='infoCard'>
      <p>{nombre}</p>
      <p>Descripcion: {descripcion}</p>
      <p>Precio: {precio}</p>
      <p>Stock: {stock}</p>



      <button onClick={actualizar} > Actualizar</button>
      <button onClick={() => eliminar(id ? id : _id)} >Eliminar</button>
      <button  onClick={ () => carrito({nombre:nombre,id:_id,precio:precio,descripcion,cantidad:1}) } > Agregar al carrito</button>

      </div>
    

      <img src={foto} width='200' />

       



    </div>
  )
}
