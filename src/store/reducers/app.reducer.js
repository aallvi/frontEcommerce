import {  ARR, DATA_FILTRADA, LINK_PDF, PHOTO_LINK,AGREGAR  } from "../actions/app.actions";

const initialState = {
    links: [],
    photo: 'a',
    carrito:[]

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
    
    
        default:
            break;
    }
    return state

}

export default AppReducer