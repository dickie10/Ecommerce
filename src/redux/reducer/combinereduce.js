import {combineReducers} from 'redux'; 
import { product_reducer } from './productreduce'; 

const productreducer = combineReducers({ 
    ALLPRODUCTS : product_reducer,
}); 

export default productreducer;