import React, { Component } from 'react';

class HotProduct extends Component {
  show_offer =(offer) => {
    if(offer===false){
      return <div className="offer">- %20</div>
    }
  }
    render()  {
      console.log(this.props.ten);
        return (
          <div className="col-md-3 col-sm-6">
          <div className="products">
            {this.show_offer(this.props.offer)}
            <div className="thumbnail"><a href="details.html"><img src={this.props.images} alt="Product Name" /></a></div>
            <div className="productname">{this.props.children}</div>
            <h4 className="price">{this.props.price}</h4>
            <div className="button_group"><button className="button add-cart" type="button">Add To Cart</button><button className="button compare" type="button"><i className="fa fa-exchange" /></button><button className="button wishlist" type="button"><i className="fa fa-heart-o" /></button></div>
          </div>
        </div>
             
        );
    }
}

export default HotProduct;