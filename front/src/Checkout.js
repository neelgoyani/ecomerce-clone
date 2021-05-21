import React from 'react';
import add from './logo/add.jpg';

import './checkout.css';
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import { useHistory } from 'react-router-dom';



const Checkout = () =>{
    const [{basket, user}, dispatch] = useStateValue();
    const history = useHistory();


    const procced = ()=>{

        history.push('/payment');

    }
    return(
        <>
            <div className = 'checkout'>
                <div className = 'checkout_left'>
                    <img src = {add} />
                    <div className = 'left_info'>
                        <h2>Hello, {user? user.email.split('@')[0] : 'Guest'}</h2>
                        <h2 className = 'checkout_title'>Your Shopping Basket</h2>

                        {
                            basket.map((item)=>{
                                return(
                                    <CheckoutProduct
                                        id = {item.id}
                                     name = {item.name}
                                        price = {item.price}
                                        rating = {item.rating}
                                        img = {item.img}
                                     />
                                )
                            })
                        }


                    </div>

                </div>
                <div className = 'checkout_right'>
                    <Subtotal />
                    <button onClick = {procced}>Procced to checkout</button>

                </div>
            </div>


        </>
    )
}

export default Checkout;