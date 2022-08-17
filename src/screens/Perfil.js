import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Routes, Route, useParams, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import { base } from '../urlApi';

export const Perfil = () => {


    const navigate = useNavigate()

    const {state}  = useLocation()
  // const {email  } = state;

  // console.log(email)

  const [datos, setDatos] = useState({})

  let email = localStorage.getItem('email')

  console.log('email',email)

  const register = async() => {

    if(email ){

      try {

        const response = await axios.get(`${base}/home/${email}`)
    
        setDatos(response.data)
        console.log(response.data)

     
        
    } catch (error) {
        console.log(error)
    }




    }

   
   


  }

  const [file, setFile] = useState('')

  const  onChangeHandler=(event)=>{

    // console.log(event.target.files[0].name)
    setFile({
      selectedFile: event.target.files[0],
      loaded: 0,
    })



}

const [fotoNew, setfotoNew] = useState('')

const subir = async () => {

        try {
          // setDatos([])
          const data = new FormData()
          data.append('file', file.selectedFile)

          console.log(file.selectedFile.name)
          
          let pick = file.selectedFile.name

          setfotoNew(file.selectedFile.name)

          const response = await axios.post(`${base}/upload`, data, {pick}
          )
          const responseMongo = await axios.post(`${base}/uploadMongo`, {pick,email}
          )



          
        } catch (error) {
          console.log(error)
        }

        // register()


}

  useEffect(() => {

  
      register()

    
  

  }, [fotoNew])
  
  

  const salir = () => {

    localStorage.removeItem('session')
    localStorage.removeItem('email')

    navigate('/')


  }


  return (
    <div>

      {
        datos && datos[0] &&
        <>
        <p>nombre: {datos[0].nombre} </p>
       <p>direccion: {datos[0].direccion} </p>
       <p>edad: {datos[0].edad} </p>
       <p>telefono: {datos[0].telefono} </p>
       <p>email: {datos[0].email} </p>

      
      <p>Foto de perfil:</p>

       <input type="file" name="file" onChange={(e) =>onChangeHandler(e) }/>

       <button onClick={subir} >Subir imagen</button>

       
        </>

        

      }

      { email ?
      <button onClick={salir} >Salir</button>
      : <p>No estas logeado</p>
      }


      {
        datos[0] && 
        
        <img src={`${base}/static/${  datos[0].foto}`} width='300' height='300' />
      }
{/* 
       <p>nombre: {datos[0].nombre} </p>
       <p>direccion: {datos[0].direccion} </p>
       <p>edad: {datos[0].edad} </p>
       <p>telefono: {datos[0].telefono} </p>
       <p>email: {datos[0].email} </p> */}


    </div>
  )
}
