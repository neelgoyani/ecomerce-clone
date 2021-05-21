import React, { useEffect, useState } from "react";
import CheckoutProduct from "./CheckoutProduct";

import "./payment.css";
import { useStateValue } from "./StateProvider";
import {
  useStripe,
  useElements,
  CardCvcElement,
  CardElement,
} from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import axios from './axios';
import { useHistory } from "react-router-dom";

import {db} from './firebase';

const Payment = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  const stripe = useStripe();
  const elements = useElements();
  const history = useHistory();


  const [procesing, setProcesing] = useState(false);
  const [ succeeded, setSucceeded] = useState('');
  const [error, setError] = useState(null);
  const [disabled,setDisabled] = useState(true)
  const [clientSecret, setClentSecret] = useState(true);

  useEffect(()=>{
    const getClientsecret = async ()=>{

        const response = await axios({
            method : 'POST',
            url : `payments/create?total=${getBasketTotal(basket) * 100}`
        })

        console.log(getBasketTotal(basket))

        setClentSecret(response.data.clientSecret)

    }

    getClientsecret();
  },[basket])

  console.log(clientSecret)


  const handleSubmit = async (e)=>{

        e.preventDefault();
        setProcesing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
           payment_method : {
               card : elements.getElement(CardElement)
           }
        }).then(({paymentIntent})=>{

          console.log("neel order")
          
            db
              .collection('user')
              .doc(user?.uid)
              .collection('orders')
              .doc(paymentIntent.id)
              .set({
                basket : basket,
                amount : paymentIntent.amount,
                created : paymentIntent.created
              })

            setError(null);
            setProcesing(false);
            setSucceeded(true)
            console.log(paymentIntent)
            dispatch({
              type : 'EMPTY_BASKET'
            })

            

            history.replace('/order')
        })

       
   

  }

  const handleChange = (e)=>{

    setDisabled(e.empty);
    setError(e.error ? e.error.message : '')

  }

  return (
    <>
      <div className="payment">
        <div className="payment_container">
          <h1>Checkout ({basket?.length} items)</h1>
          <div className="payment_section">
            <div className="payment_title">
              <h2>Delivery Info</h2>
            </div>
            <div className="delivery_add">
              <p>{user?.email}</p>
              <p>108, Gopinath Society</p>
              <p>Katargam, Surat</p>
            </div>
          </div>
          <div className="payment_section">
            <div className="C">
              <h2>Review Item</h2>
            </div>
            <div className="payment_product">
              {basket.map((item) => {
                return (
                  <CheckoutProduct
                    id={item.id}
                    name={item.name}
                    rating={item.rating}
                    price={item.price}
                    img={item.img}
                  />
                );
              })}
            </div>
          </div>
          <div className="payment_section">
            <div className="payment_title">
              <h2>Payment Method</h2>
              <form onSubmit = {handleSubmit}>
                <CardElement onChange = {handleChange} />
                <div className="price_container">
                  <CurrencyFormat
                    renderText={(value) => {
                      return (
                        <>
                          <h3>Order Total : {value}</h3>
                        </>
                      );
                    }}
                    value={getBasketTotal(basket)}
                    thousandSeparator={true}
                    displayType={"text"}
                    prefix={"₹"}
                  />
                </div>
                <button disabled = {disabled || procesing || succeeded}>
                    <span>{procesing ? <p>procesing</p> : <p>Buy now</p>}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
