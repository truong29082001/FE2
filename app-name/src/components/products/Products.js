import React, { Component } from 'react';
import HotProduct from './HotProducts/HotProduct';
import FeauturedProduct from './FeauturedProduct/FeauturedProduct';
import OurBrand from './OurBrand/OurBrand';
import Homslider from './hom-slider/Homslider';
import axios from 'axios';

class Products extends Component {

  constructor(){
    super();
    this.state ={items: []};
   }

   componentDidMount() {
    axios.get('http://localhost:3002')
     .then(response => {
      console.log(response.data);
       this.setState({ items: response.data });
     })
     .catch(function (error) {
       console.log(error);
     })
    }

    render() {
        return (
<div className="a">
<Homslider />
<div className="clearfix" />
<div className="container_fullwidth">

  <div className="container">
    <div className="hot-products">
      <h3 className="title"><strong>Hot</strong> Products</h3>
      <div className="control"><a id="prev_hot" className="prev" href="#">&lt;</a><a id="next_hot" className="next" href="#">&gt;</a></div>
  
         
          {this.state.items.map(item => (
           
           <HotProduct  price={item.gia}  images="images/products/small/products-01.png" offer ={false}>{item.tensanpham}</HotProduct>

        ))}
          
      
  
    </div>
    <div className="clearfix" />
    <div className="featured-products">
      <h3 className="title"><strong>Featured </strong> Products</h3>
      <div className="control"><a id="prev_featured" className="prev" href="#">&lt;</a><a id="next_featured" className="next" href="#">&gt;</a></div>
      <ul id="featured">
        <li>
          <div className="row">
            <FeauturedProduct />
            <FeauturedProduct />
            <FeauturedProduct />
            <FeauturedProduct />
            
           
          </div>
        </li>
      </ul>
    </div>
    <div className="clearfix" />
    <OurBrand />
 </div>
</div>
</div>

        );
    }
}

export default Products;