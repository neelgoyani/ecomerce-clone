const functions = require('firebase-functions');
const express = require('express');

const cors = require('cors');

const stripe = require('stripe')('sk_test_51I6BjTIyFW7EppTvWhP7Mztih5vvjOmAYrp6rP2h9YccUsNkkchXAN7e4EZKoAQ4vvfx0wxNSBRjIu665JFeBBDF00N3R6kJ9h');

const app =express();

app.use(cors({origin : true}));
app.use(express.json());


app.get('/',(req,res)=>{
    res.status(200).send('hello neel');
})

app.post('/payments/create', async (req,res)=>{
    const total = req.query.total;

    console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",total)

    console.log('request recieved >>',total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount : total,
        currency : "inr"
    })
    res.status(201).send({
        clientSecret : paymentIntent.client_secret,
    })
})

exports.api = functions.https.onRequest(app);
//http://localhost:5001/clone-3d109/us-central1/api