import React, { useEffect } from "react";
import "./styles.css";
import Header from "../header";
import Home from "../home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "../checkout";
import Login from "../login";
import { auth } from "../firebase";
import { useStateValue } from "../stateProvider";
import Payment from "./payment";
import {loadStripe} from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./orders";

const promise = loadStripe("pk_test_51IoU2mFMNVuR3u1MQef4Mn6vW9xvY5ERC0CsDvZDoNOhU7RN1IU8pdBLMyMvtbBhBGbDqNVVWXdgh9P5E28urwPW00oOoQH1SV");

export default function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
        <Route path="/orders">
           <Header/>
           <Orders/>
        </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
            <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
