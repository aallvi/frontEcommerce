import React, { useEffect, useState } from 'react'
import axios from 'axios'


export const MisMensajes = () => {


    const email = localStorage.getItem('email')

   const [mensajes, setMensajes] = useState([])
    
    const mensajesGet = async () => {

        try {
             
            const response = await axios.get(`http://localhost:8083/api/mensajes/${email}`)

            setMensajes(response.data)

        } catch (error) {
            console.log(error)
        }



    }

    useEffect(() => {
        if(email){

            mensajesGet()
        }


    }, [])
    




  return (
    <div>
        <h1>Mis Mensajes</h1>

        {
            !email &&
            <p>No estas logeado</p>
        }
        {
            email && mensajes.length === 0 &&
            <p>No tienes mensajes</p>
        }

        {
            mensajes.map((item, i) => <div key={i} >
              {item.mensaje} - {item.fecha}
            </div> )
        }

    </div>
  )
}
