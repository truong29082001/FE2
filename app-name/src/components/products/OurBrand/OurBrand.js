import React, { Component } from 'react';

class OurBrand extends Component {
    render() {
        return (
            <div className="our-brand">
            <h3 className="title"><strong>Our </strong> Brands</h3>
            <div className="control"><a id="prev_brand" className="prev" href="#">&lt;</a><a id="next_brand" className="next" href="#">&gt;</a></div>
            <ul id="braldLogo">
              <li>
                <ul className="brand_item">
                  <li>
                    <a href="#">
                      <div className="brand-logo"><img src="images/envato.png" alt="" /></div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="brand-logo"><img src="images/themeforest.png" alt="" /></div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="brand-logo"><img src="images/photodune.png" alt="" /></div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="brand-logo"><img src="images/activeden.png" alt="" /></div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="brand-logo"><img src="images/envato.png" alt="" /></div>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <ul className="brand_item">
                  <li>
                    <a href="#">
                      <div className="brand-logo"><img src="images/envato.png" alt="" /></div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="brand-logo"><img src="images/themeforest.png" alt="" /></div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="brand-logo"><img src="images/photodune.png" alt="" /></div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="brand-logo"><img src="images/activeden.png" alt="" /></div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="brand-logo"><img src="images/envato.png" alt="" /></div>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
       
        );
    }
}

export default OurBrand;