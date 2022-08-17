import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { base } from '../urlApi'

export const Login = () => {

    const navigate = useNavigate()

    const [user, setUser] = useState({
        usuario:'',
        clave:''
    })
    
  console.log(user)


  const login = async() => {

    try {

        const response = await axios.post(`${base}/login`,{
            username:user.usuario,
            password:user.clave,
            
        },)
    
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
  const getUser = async() => {

    try {

        const response = await axios.get(`${base}/user`,)
    
        console.log(response.data)
    
        
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
            clave:e.target.value
        }) } />


        <button onClick={login} >Entrar</button>
        <button onClick={getUser} >get</button>




    </div>
  )
}
