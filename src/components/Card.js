import React from 'react'
import { NavLink, useNavigate,useParams  } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { agregarCarrito } from '../store/actions/app.actions';


export const Card = ({codigo,descripcion,foto,nombre,precio,stock,_id,id ,eliminar}) => {


  let navigate = useNavigate();
  

  const dispatch = useDispatch()
  


  const actualizar = () => {
    navigate(`actualizar-producto/${id ? id : _id}`)

  }

  const carrito = (obj) => {
    dispatch(agregarCarrito(obj))

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
      <button  onClick={ () => carrito({nombre:nombre,id:_id,precio:precio}) } > Agregar al carrito</button>

      </div>
    

      <img src={foto} width='200' />

       



    </div>
  )
}
