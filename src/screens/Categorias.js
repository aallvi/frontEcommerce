import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { base } from '../urlApi'

export const Categorias = () => {

    let navigate = useNavigate();


    const [productos, setProductos] = useState([])

    console.log(productos)

    const categorias = productos.map(({categoria}) => {
        return categoria
    } )

    console.log('categorias',categorias)

    const consultarDatos = async() =>{

        const response = await fetch(`${base}/api/productos`,{method: 'GET'})
        const data = await response.json()
  
        // console.log(data)
        setProductos(data)

    }

     useEffect(() => {

        consultarDatos()
    
     }, [])


     const navCategoria = (item) => {
          navigate(`/categorias/${item}`)

     }


  return (
    <div>

        {
            categorias.map((item,index )=> (
                <button onClick={ () => navCategoria(item) } key={index} >{item} </button>
             ))
        }


{/* {
             productos.map(item => (
                 <Card key={item._id} {...item} eliminar={eliminar} />
             ))
         } */}



    </div>
  )
}
