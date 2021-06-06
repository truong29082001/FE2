import React, { Component } from 'react';
import OurBrand from '../products/OurBrand/OurBrand';
import RowProductList from './RowProductList/RowProductList';

class ProductList extends Component {
    render() {
        return (
            <div className="container_fullwidth">
            <div className="container">
                <RowProductList />
  <div className="clearfix">
              </div>
              <OurBrand />
           </div>
          </div>
          
        );
    }
}

export default ProductList;