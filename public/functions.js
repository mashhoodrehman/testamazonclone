const functions = require( "firebase-function");
const express = require("express");
const cors = require("cors");
const stripe =require("stripe")("sk_test_51IoU2mFMNVuR3oqd2f7w5QNUa6FEK1vzrX82BOXTE3HQfhT2Ts2YH3U4Cgu6juIELxdpNNhkbinGaJx2Onk1Q00EfjhRnyA")


const app = express();
app.use (cors({origin:true}))
app.use(express.json());

app.get( "/", (request,response) => response.status(200).send("hello world"))
app.post("/payments/create",async(request,response) =>{
const total = request.query.total;
console.log("Payment Request Recived",total);
const paymentIntent = await stripe.paymentIntents.create({
amount:total,
currency:"usd",
});
response.status(201).send({
  clientSecret:paymentIntent.client_secret,
});
})
exports.api = functions.https.onRequest(app)