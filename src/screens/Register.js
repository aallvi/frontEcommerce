import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Register = () => {

    const navigate = useNavigate()

    const [user, setUser] = useState({
        usuario:'',
        clave:'',
        claveRepeat:'',
        nombre:'',
        direccion:'',
        edad:0,
        telefono:0
    })
    
  console.log(user)

  const register = async() => {

    try {

        const response = await axios.post('https://desafiocoder1234.herokuapp.com/register',{
            username:user.usuario,
            password:user.clave,
            nombre:user.nombre,
            direccion:user.direccion,
            edad:user.edad,
            telefono:user.telefono
        })
    
        console.log(response.data)

        if(response.data === 'ready'){
            localStorage.setItem('session',response.data)
            navigate('/perfil',{ state: {email:user.usuario} })
            localStorage.setItem('email',user.usuario)

        }
    
        
    } catch (error) {
        console.log(error)
    }

   


  }



  return (
    <div>


    <p>Usuario</p>
    <input type='text' value={user.usuario} onChange={e => setUser({
        usuario:e.target.value,
        clave:user.clave
    }) } />


    <p>Clave</p>
    <input type='text' value={user.clave} onChange={e => setUser({
        usuario:user.usuario,
        clave:e.target.value,
        telefono:user.telefono
    }) } />


    <p>Repita la clave</p>
    <input type='text' value={user.claveRepeat} onChange={e => setUser({
        usuario:user.usuario,
        clave:user.clave,
        claveRepeat:e.target.value,
        nombre:user.nombre,
        direccion:user.direccion,
        edad:user.edad,
        telefono:user.telefono
    }) } />
    <p>nombre</p>
    <input type='text' value={user.nombre} onChange={e => setUser({
        usuario:user.usuario,
        clave:user.clave,
        claveRepeat:user.claveRepeat,
        nombre:e.target.value,
        direccion:user.direccion,
        edad:user.edad,
        telefono:user.telefono
    }) } />
    <p>direccion</p>
    <input type='text' value={user.direccion} onChange={e => setUser({
        usuario:user.usuario,
        clave:user.clave,
        claveRepeat:user.claveRepeat,
        nombre:user.nombre,
        direccion:e.target.value,
        edad:user.edad,
        telefono:user.telefono
    }) } />
    <p>edad</p>
    <input type='number' value={user.edad} onChange={e => setUser({
        usuario:user.usuario,
        clave:user.clave,
        claveRepeat:user.claveRepeat,
        nombre:user.nombre,
        direccion:user.direccion,
        edad:e.target.value,
        telefono:user.telefono
    }) } />
    <p>telefono</p>
    <input type='number' value={user.telefono} onChange={e => setUser({
        usuario:user.usuario,
        clave:user.clave,
        claveRepeat:user.claveRepeat,
        nombre:user.nombre,
        direccion:user.direccion,
        edad:user.edad,
        telefono:e.target.value
    }) } />


    <button onClick={register} >Entrar</button>




</div>
  )
}
