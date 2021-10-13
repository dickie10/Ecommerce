import React,{ useEffect } from 'react';
import { useSelector } from 'react-redux';    
import Productcomp from './Productcomp';  
import axios from 'axios';  
import { useDispatch } from 'react-redux'; 
import  {setproducts}  from '../redux/actions/action';

const ProductList = () => { 
   const products = useSelector((state) => state); 
    console.log(products);  
    const dispatch = useDispatch();
    useEffect(() => { 
        axios.get('https://fakestoreapi.com/products') 
        .then(res =>{ 
            dispatch(setproducts(res));
        }) 
        .catch(err =>{ 
            console.log(err);
        })
    },[]) 
    return (
        <div>
            <Productcomp />
        </div>
    )
} 
export default ProductList
