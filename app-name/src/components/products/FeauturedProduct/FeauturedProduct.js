import React, { Component } from 'react';

class FeauturedProduct extends Component {
    render() {
        return (
          <div className="col-md-3 col-sm-6">
          <div className="products">
            <div className="thumbnail"><a href="details.html"><img src="images/products/small/products-04.png" alt="Product Name" /></a></div>
            <div className="productname">Iphone 5s Gold 32 Gb 2013</div>
            <h4 className="price">$451.00</h4>
            <div className="button_group"><button className="button add-cart" type="button">Add To Cart</button><button className="button compare" type="button"><i className="fa fa-exchange" /></button><button className="button wishlist" type="button"><i className="fa fa-heart-o" /></button></div>
          </div>
        </div>


   
        );
    }
}

export default FeauturedProduct;