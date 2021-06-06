import React, { Component } from 'react';
import GetNewLetter from '../GetNewletter/GetNewLetter';
import ProductTagLeft from '../ProductLefbarTag/ProductTagLeft';
import HotProduct from '../products/HotProducts/HotProduct';
import OurBrand from '../products/OurBrand/OurBrand';
import PreviewImageDetail from './PreviewImage/PreviewImageDetail';
import ProductDescription from './ProductDescription/ProductDescription';
import SpecialItem from './SpecialItemCoMd3/SpecialItem';
import TabBox from './TabBox/TabBox';

class Detail extends Component {
    render() {
        return (
            <div className="container_fullwidth">
            <div className="container">
              <div className="row">
                <div className="col-md-9">
                  <div className="products-details">
                 <PreviewImageDetail />
                 <ProductDescription />
                  </div>
                  <div className="clearfix">
                  </div>
                  <TabBox />
                 <div className="clearfix">
                  </div>
                  <div id="productsDetails" className="hot-products">
                    <h3 className="title">
                      <strong>
                        Hot
                      </strong>
                      Products
                    </h3>
                    <div className="control">
                      <a id="prev_hot" className="prev" href="#">
                        &lt;
                      </a>
                      <a id="next_hot" className="next" href="#">
                        &gt;
                      </a>
                    </div>
                    <ul id="hot">
                      <li>
                        <div className="row">
                        <HotProduct price ="2000" images="images/products/small/products-01.png" offer ={true}>Laptop</HotProduct>
           <HotProduct  price="3000"  images="images/products/small/products-01.png" offer ={false}>phone</HotProduct>
           <HotProduct price ="4000"  images="images/products/small/products-01.png" offer ={true}>aipad</HotProduct>
           <HotProduct  price="5000"   images="images/products/small/products-01.png" offer={true} >ipod</HotProduct>
            
                       </div>
                      </li>
                      
                    </ul>
                  </div>
                  <div className="clearfix">
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="special-deal leftbar">
                    <h4 className="title">
                      Special 
                      <strong>
                        Deals
                      </strong>
                    </h4>
                    <SpecialItem />
                    <SpecialItem />
                    <SpecialItem />
                  </div>
                  <div className="clearfix">
                  </div>
                  <ProductTagLeft />
                  <div className="clearfix">
                  </div>
                  <div className="get-newsletter leftbar">
                    <h3 className="title">
                      Get 
                      <strong>
                        newsletter
                      </strong>
                    </h3>
                    <p>
                      Casio G Shock Digital Dial Black.
                    </p>
                    <form>
                      <input className="email" type="text" name placeholder="Your Email..." />
                      <input className="submit" type="submit" defaultValue="Submit" />
                    </form>
                  </div>
                  <div className="clearfix">
                  </div>
                  <GetNewLetter />
                  <div className="clearfix">
                  </div>
                </div>
              </div>
              <div className="clearfix">
              </div>
              <OurBrand />
           </div>
          </div>
          
        );
    }
}

export default Detail;