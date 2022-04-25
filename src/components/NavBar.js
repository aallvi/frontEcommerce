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

    </div>
  )
}
