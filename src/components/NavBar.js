import React from 'react'
import { NavLink } from 'react-router-dom'


export const NavBar = () => {


  return (
    <div>

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
          perfil 
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

    </div>
  )
}
