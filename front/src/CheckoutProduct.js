import React from 'react';

import './checkoutproduct.css';
import { useStateValue } from './StateProvider';

const CheckoutProduct = ({ id,img,name, price, rating, disable}) =>{

    const [{basket}, dispatch] = useStateValue();

    const removeItem = (e)=>{
        e.preventDefault();

        dispatch({
            type : 'REMOVE_FROM_BASKET',
            id : id
        })

    }
    return(
        <>

            <div className = 'checkout-product'>
                <img className = 'cproduct_img' src = {img} />
                <div className = 'cproduct_info'>
                    <p>{name}</p>
                    <p>₹{price}</p>
                    <div className = 'cproduct_rating'>
                    {
                        Array(rating).fill().map((_,i)=>{
                            return(
                                <p>⭐</p>
                            )
                        })
                    }
                    </div>

                    {
                        (!disable && <button onClick = {removeItem}>Remove from basket</button>)
                    }
                    
                    

                </div>

            </div>



        </>
    )
}

export default CheckoutProduct;