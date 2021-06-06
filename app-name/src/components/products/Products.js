import React, { Component } from 'react';
import HotProduct from './HotProducts/HotProduct';
import FeauturedProduct from './FeauturedProduct/FeauturedProduct';
import OurBrand from './OurBrand/OurBrand';
import Homslider from './hom-slider/Homslider';

class Products extends Component {
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
      <ul id="hot">
        <li>
          <div className="row">
           <HotProduct price ="2000" images="images/products/small/products-01.png" offer ={true}>Laptop</HotProduct>
           <HotProduct  price="3000"  images="images/products/small/products-01.png" offer ={false}>phone</HotProduct>
           <HotProduct price ="4000"  images="images/products/small/products-01.png" offer ={true}>aipad</HotProduct>
           <HotProduct  price="5000"   images="images/products/small/products-01.png" offer={true} >ipod</HotProduct>
            <HotProduct />
          </div>
        </li>
       
      </ul>
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