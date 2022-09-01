import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Card } from '../components/Card'
import { base } from '../urlApi'
import io from 'socket.io-client'
import moment from 'moment'
import axios from 'axios'
const socket = io(base)

export const Homescreen = () => {

  socket.emit('conectado', 'as')

  // const [carta, setCarta] = useState(JSON.parse(localStorage.getItem('carta')) || [])

  const carta = useSelector(state => state.app.carrito)


  console.log('carta',carta)


  const [message, setMessage] = useState("")
  const [mensajes, setMensajes] = useState([])

  const email = localStorage.getItem('email')
  
  let nombreChat = email === 'alvarovale' ? 'servidor' : email !== 'alvarovale' ? email : `user ${Date.now()}`

  console.log('mensajes',mensajes)

  const sendMessage = async () => {
    socket.emit("send_message", {message, nombre:nombreChat, fecha:moment().format('lll')})
    setMensajes([...mensajes,{mensaje:message, nombre:nombreChat, fecha:moment().format('lll')}])

    try {

        const data={
         email:email ? email : `user ${Date.now()}`,
         mensaje:message,
         fecha: moment().format('lll'),
         tipo: nombreChat === 'servidor' ? 'servidor' : 'usuario'
        }

        const response = await axios.post(`${base}/api/mensajes`, {
          data
        })

        console.log(response.data)
    
      
    } catch (error) {
      console.log(error)
    }



  }



  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMensajes([...mensajes,{mensaje:data.message, nombre:data.nombre, fecha:data.fecha}])
    })
        return () => {socket.off()}
  }, [mensajes])
  




  const [productos, setProductos] = useState([])




    // console.log(productos)

    const consultarDatos = async() =>{

        const response = await fetch(`${base}/api/productos`,{method: 'GET'})
        const data = await response.json()
  
        // console.log(data)
        setProductos(data)

    }

     useEffect(() => {

        consultarDatos()
     }, [])
     
     
 
     const eliminar = async (id) => {

   
      console.log('id',id)

      const response = await fetch(`${base}/api/productos/${id}`,{method: 'DELETE'})
      const data = await response.json()

     
      consultarDatos()
      console.log('products',productos)

  

    
    // console.log(id)

  }



  return (
    <div className='hola' >
        
        <h1 className='tituloDigital'>Pinar Store</h1>

      <div> 

          {/* <h2> Productos </h2> */}

          <div className='ContendorProductos' >
          {
             productos.map(item => (
                 <Card key={item._id} {...item} eliminar={eliminar} />
             ))
         }
          

          </div>

       
          
      </div>


      <div className='chatBox' >
        <h1>Chat</h1>
        <div className='inputContainer' >
        <input onChange={(e) => setMessage(e.target.value) } />
        <button onClick={sendMessage} >Send</button>

        </div>


        <h2>Mensajes</h2>
        {mensajes.map((e,index) => 
        <p className='mensajes' key={index} >{e.fecha} - {e.nombre} : {e.mensaje} </p>
         )}
      </div>


    </div>


  )
}
