import React, { Component } from 'react';

class ProductListItem extends Component {
    render() {
        return (
          <ul className="b">
          <li className="products">
            <div className="offer">
              New
            </div>
            <div className="thumbnail">
              <img src="images/products/small/products-05.png" alt="Product Name" />
            </div>
            <div className="product-list-description">
              <div className="productname">
                Lincoln Corner Unit Products
              </div>
              <p>
                <img src="images/star.png" alt="" />
                <a href="#" className="review_num">
                  02 Review(s)
                </a>
              </p>
              <p>
                Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lorem nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultri ces posuere cubilia curae. Proin lectus ipsum, gravida etds mattis vulputate, tristique ut lectus. Sed et lorem nunc...
              </p>
              <div className="list_bottom">
                <div className="price">
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
                </div>
              </div>
            </div>
          </li>
      </ul>
        );
    }
}

export default ProductListItem;