import React, { Component } from 'react';

class ProductDescription extends Component {
    render() {
        return (
            <div className="products-description">
            <h5 className="name">
              Lincoln Corner Unit Products
            </h5>
            <p>
              <img alt="" src="images/star.png" />
              <a className="review_num" href="#">
                02 Review(s)
              </a>
            </p>
            <p>
              Availability: 
              <span className=" light-red">
                In Stock
              </span>
            </p>
            <p>
              Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lorem nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrie ces posuere cubilia curae. Proin lectus ipsum, gravida etds mattis vulps utate, tristique ut lectus. Sed et lorem nunc...
            </p>
            <hr className="border" />
            <div className="price">
              Price : 
              <span className="new_price">
                450.00
                <sup>
                  $
                </sup>
              </span>
              <span className="old_price">
                450.00
                <sup>
                  $
                </sup>
              </span>
            </div>
            <hr className="border" />
            <div className="wided">
              <div className="qty">
                Qty &nbsp;&nbsp;: 
                <select>
                  <option>
                    1
                  </option>
                </select>
              </div>
              <div className="button_group">
                <button className="button">
                  Add To Cart
                </button>
                <button className="button compare">
                  <i className="fa fa-exchange">
                  </i>
                </button>
                <button className="button favorite">
                  <i className="fa fa-heart-o">
                  </i>
                </button>
                <button className="button favorite">
                  <i className="fa fa-envelope-o">
                  </i>
                </button>
              </div>
            </div>
            <div className="clearfix">
            </div>
            <hr className="border" />
            <img src="images/share.png" alt="" className="pull-right" />
          </div>
        
        );
    }
}

export default ProductDescription;