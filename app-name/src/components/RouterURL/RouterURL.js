import React, { Component } from 'react';
import {
    
    Switch,
    Route,
    
  } from "react-router-dom";
import Cart from '../Cart/Cart';
import CheckOut2 from '../CheckOut2/CheckOut2';

import Contact from '../Contact/Contact';

import ProductList from '../ProductList/ProductList';
import Products from '../products/Products';
  
class RouterURL extends Component {
    render() {
        return (
             <div>
                   <Switch>
                   <Route path="/cart"> <Cart/> </Route>
                    <Route path="/Contact"> <Contact /></Route>
                    <Route path="/CheckOut2">  <CheckOut2 /> </Route>
                    <Route path="/ProductList"> <ProductList /> </Route>
                    <Route path="/"> <Products /> </Route>
                    <Route> < Products/> </Route>
          </Switch>
             </div>
        );
    }
}

export default RouterURL;