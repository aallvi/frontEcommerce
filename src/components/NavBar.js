import React from 'react'
import { NavLink } from 'react-router-dom'


export const NavBar = () => {


    // const email = localStorage.getItem('email')

    // console.log(email)

    


  return (
    <div className='navBar' >

       <li>
        <NavLink
          to="/"
        //   onClick={() => setToggleMenu(false) }

          className={({ isActive }) =>
            isActive ? 'activeClassName' : 'BotonNav'
          }
        >
          Home 
        </NavLink>
        </li>


       <li>
        <NavLink
          to="/listar-productos"
        //   onClick={() => setToggleMenu(false) }

          className={({ isActive }) =>
            isActive ? 'activeClassName' : 'BotonNav'
          }
        >
          Listar 
        </NavLink>
        </li>
       <li>
        <NavLink
          to="/login"
        //   onClick={() => setToggleMenu(false) }

          className={({ isActive }) =>
            isActive ? 'activeClassName' : 'BotonNav'
          }
        >
          Login 
        </NavLink>
        </li>
       <li>
        <NavLink
          to="/register"
        //   onClick={() => setToggleMenu(false) }

          className={({ isActive }) =>
            isActive ? 'activeClassName' : 'BotonNav'
          }
        >
          Registrate 
        </NavLink>
        </li>
       <li>
        <NavLink
          to="/perfil"
        //   onClick={() => setToggleMenu(false) }

          className={({ isActive }) =>
            isActive ? 'activeClassName' : 'BotonNav'
          }
        >
          Perfil 
        </NavLink>
        </li>
       <li>
        <NavLink
          to="/carrito"
        //   onClick={() => setToggleMenu(false) }

          className={({ isActive }) =>
            isActive ? 'activeClassName' : 'BotonNav'
          }
        >
          Ir al carrito 
        </NavLink>
        </li>

      
          <li>
          <NavLink
            to="/ordenes"
          //   onClick={() => setToggleMenu(false) }
  
            className={({ isActive }) =>
              isActive ? 'activeClassName' : 'BotonNav'
            }
          >
           Mis Ordenes
          </NavLink>
          </li>
          <li>
          <NavLink
            to="/categorias"
          //   onClick={() => setToggleMenu(false) }
  
            className={({ isActive }) =>
              isActive ? 'activeClassName' : 'BotonNav'
            }
          >
          Categorias
          </NavLink>
          </li>
          <li>
          <NavLink
            to="/mensajes"
          //   onClick={() => setToggleMenu(false) }
  
            className={({ isActive }) =>
              isActive ? 'activeClassName' : 'BotonNav'
            }
          >
          Mis Mensajes
          </NavLink>
          </li>
        
    

    </div>
  )
}
