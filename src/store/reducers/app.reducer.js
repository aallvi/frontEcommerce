import {  ARR, DATA_FILTRADA, LINK_PDF, PHOTO_LINK,AGREGAR, RESTAURAR, FILTRAR  } from "../actions/app.actions";

const initialState = {
    links: [],
    photo: 'a',
    carrito:JSON.parse(localStorage.getItem('carta')) || []

}

const AppReducer = (state = initialState, action) => {

    switch (action.type) {
        case LINK_PDF: 
        return {
          ...state,
          links:[...state.links,action.payload]

        }
        case AGREGAR: 
        return {
          ...state,
          carrito:[...state.carrito,action.payload]

        }
        case FILTRAR: 
        return {
         
          carrito:action.payload

        }
        case RESTAURAR: 
        return {
          ...state,
          carrito:[]

        }
    
    
        default:
            break;
    }
    return state

}

export default AppReducer