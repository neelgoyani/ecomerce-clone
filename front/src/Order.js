import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import "./order.css";
import Order2 from "./Order2";
import { useStateValue } from "./StateProvider";

const Order = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  const [order, setOrder] = useState([]);

  useEffect(() => {
    if (user) {
        db
        .collection('user')
        .doc(user?.uid)
        .collection('orders')
        .orderBy('created' , 'desc')
        
        .onSnapshot(snapshot =>{
          setOrder(snapshot.docs.map(doc =>({
            id : doc.id,
            data : doc.data()
          })))

            
        })
        
        
          
        
    }else{
        setOrder([])
    }
  }, [user]);
  return (
    <>
      <div className="order">
        <h1 className = 'order_title'>Your Orders</h1>
        {
          order.map(order =>{
            return (
              <Order2 order = {order} />
            )
          })
        }
      </div>
    </>
  );
};

export default Order;
