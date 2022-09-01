import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Card } from '../components/Card';
import { base } from '../urlApi';

export const CategoriasProductos = () => {

    const { categorias} = useParams();

    console.log(categorias)

    const [productos, setProductos] = useState([])

    console.log('productos',productos)


    const consultarDatos = async() =>{

        const response = await fetch(`${base}/api/productos/categoria/${categorias}`,{method: 'GET'})
        const data = await response.json()
  
        // console.log(data)
        if(data.length > 0)
        setProductos(data)

    }

    useEffect(() => {
        consultarDatos()
    }, [])
    


  return (
    <div>{categorias}

        {
            productos.length > 0 ?
            <>
             {
             productos.map(item => (
                 <Card key={item._id} {...item}  />
             ))
            }
            </>
            :
            <p>No existe esta categoria</p>
        }

         
    
    
    
    </div>
  )
}
