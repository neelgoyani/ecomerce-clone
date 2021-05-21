import React from "react";
import moment from "moment";

import './order2.css';

import product from './logo/amazon-product.jpg';

import CheckoutProduct from "./CheckoutProduct";

const Order2 = ({ order }) => {

  console.log(order)
    
  return (
    <>

      <div className = 'order2'>
        <h2>Order on {moment.unix(order.data.created).format('Do MMMM YYYY, h:mm')}</h2>
        <div className = 'order_id'>{order.id}</div>
        <div className = 'order_product'>
          {
            order.data.basket?.map(item=>(
              <CheckoutProduct
                id = {item.id}
                name = {item.name}
                price = {item.price}
                rating = {item.rating}
                img = {item.img}
                disable
               />
            ))
          }
        </div>
        <div className = 'order_total'>Total Amount of this order : ₹{(order.data.amount)/100}</div>
      </div>      

    </>
  );
};

export default Order2;
