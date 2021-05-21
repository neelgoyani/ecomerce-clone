import React from 'react';
import product from './logo/amazon-product.jpg';

import './product.css';
import { useStateValue } from './StateProvider';

const Product = ({id,name,price,img,rating})=>{

    const [{basket}, dispatch] = useStateValue()

    console.log(basket)

    const addToBasket = ()=>{

        dispatch({
            type : 'ADD_TO_BASKET',
            item : {
                id : id ,
                name : name,
                price : price,
                rating : rating,
                img : img
            }
        })

    }
    return(
        <>
            <div className = 'product'>
                <div className = 'product_info'>
                    <p >{name}</p>
                    <p className = 'product_price'>
                        <small> ₹ </small>
                        <strong>{price}</strong>
                    </p>
                    <div className = 'product_rating'>
                       {
                           Array(rating).fill().map((_,i)=>{

                              return <p>⭐</p>
                           })
                       }
                    </div>
                </div>

                <img  src = {img} />

                <button onClick = {addToBasket}>add to cart</button>
            </div>


        </>
    )
}

export default Product;