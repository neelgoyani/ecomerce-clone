const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.use(express.json());
const stripe = require('stripe')('sk_test_51I6BjTIyFW7EppTvWhP7Mztih5vvjOmAYrp6rP2h9YccUsNkkchXAN7e4EZKoAQ4vvfx0wxNSBRjIu665JFeBBDF00N3R6kJ9h');


const server = require('http').createServer(app);


app.get('/',(req,res)=>{
    res.send('neel saspara')
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





server.listen(5000);