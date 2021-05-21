import React from 'react';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
import { useStateValue } from './StateProvider';
import './subtotal.css';

const Subtotal = ()=>{


    const [{basket}, dispatch] = useStateValue();

   

    return(
        <>

            <div className = 'subtotal'>
                <CurrencyFormat 
                    renderText = {(value)=>{
                       return <>
                            <p>Subtotal ({basket.length} items) : <strong>{value}</strong></p>

                            <small>
                                <input type = 'checkbox' />This order contains a gift
                            </small>

                        </>
                    }}

                    value = {getBasketTotal(basket)}
                    thousandSeparator = {true}
                    displayType = {'text'}
                    prefix = {'₹'}
                
                 />

                 
            </div>


        </>
    )
}

export default Subtotal;