import React, { Component } from 'react';

class SpecialItem extends Component {
    render() {
        return (
           <div className="specialIteam">
                 <div className="special-item">
                      <div className="product-image">
                        <a href="#">
                          <img src="images/products/thum/products-01.png" alt="" />
                        </a>
                      </div>
                      <div className="product-info">
                        <p>
                          Licoln Corner Unit
                        </p>
                        <h5 className="price">
                          $300.00
                        </h5>
                      </div>
                    </div>
                  
           </div>
        );
    }
}

export default SpecialItem;