import { Actiontype } from "../actions/constants";
const intial_state = { 
    products : []

} 
export const product_reducer = (state = intial_state,{type,payload}) =>{ 
    switch (type) {
        case Actiontype.SETPRODUCTS:
            return {...state,products:payload};
    
        default:
            return state;
    }
} 

