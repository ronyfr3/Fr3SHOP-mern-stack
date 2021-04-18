import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Footer from "./header/Footer";
import Header from "./header/Header";
import Home from "./Home/Home";
import ProductDetails from "./ProductDetails/ProductDetails";
import Shipping from "./Shipping/Shipping";
import Cart from "./cart/Cart";
import Admin from './Admin/Admin'
import Login from './Auth/Login'
import Register from './Auth/Register'
import PageNotFOund from './Utils/PageNotFOund'
import {UserRoute} from './Private/PrivateRoute'

const App = () => {
  
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/details/:id" component={ProductDetails} />
          {/* path="/cart can't get id from url in cart component thats why we use  path="/cart/:id?"
           here id? question mark means optional,,,user can access cart with or without id
          */}
          <Route path="/cart/:id?" component={Cart} />
          <Route path="/shipping" component={Shipping} />
          <UserRoute path="/admin">
            <Admin/>
          </UserRoute>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="*" component={PageNotFOund} />
        </Switch>
        <Footer/>
      </BrowserRouter>
    </div>
  );
};
export default App;
