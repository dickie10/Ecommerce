import { Actiontype } from "./constants"
export const setproducts = (products) =>{ 
    return{ 
        type: Actiontype.SETPRODUCTS, 
        payload: products,
    };
}; 

export const selectedproduct = (product) =>{ 
    return{ 
        type: Actiontype.SELECTEDPRODUCT, 
        payload : product,
    };
};