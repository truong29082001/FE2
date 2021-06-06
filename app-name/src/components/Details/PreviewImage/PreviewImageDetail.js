import React, { Component } from 'react';

class PreviewImageDetail extends Component {
    render() {
        return (
            <div className="preview_image">
            <div className="preview-small">
              <img id="zoom_03" src="images/products/medium/products-01.jpg" data-zoom-image="images/products/Large/products-01.jpg" alt="" />
            </div>
            <div className="thum-image">
              <ul id="gallery_01" className="prev-thum">
                <li>
                  <a href="#" data-image="images/products/medium/products-01.jpg" data-zoom-image="images/products/Large/products-01.jpg">
                    <img src="images/products/thum/products-01.png" alt="" />
                  </a>
                </li>
                <li>
                  <a href="#" data-image="images/products/medium/products-02.jpg" data-zoom-image="images/products/Large/products-02.jpg">
                    <img src="images/products/thum/products-02.png" alt="" />
                  </a>
                </li>
                <li>
                  <a href="#" data-image="images/products/medium/products-03.jpg" data-zoom-image="images/products/Large/products-03.jpg">
                    <img src="images/products/thum/products-03.png" alt="" />
                  </a>
                </li>
                <li>
                  <a href="#" data-image="images/products/medium/products-04.jpg" data-zoom-image="images/products/Large/products-04.jpg">
                    <img src="images/products/thum/products-04.png" alt="" />
                  </a>
                </li>
                <li>
                  <a href="#" data-image="images/products/medium/products-05.jpg" data-zoom-image="images/products/Large/products-05.jpg">
                    <img src="images/products/thum/products-05.png" alt="" />
                  </a>
                </li>
              </ul>
              <a className="control-left" id="thum-prev" href="javascript:void(0);">
                <i className="fa fa-chevron-left">
                </i>
              </a>
              <a className="control-right" id="thum-next" href="javascript:void(0);">
                <i className="fa fa-chevron-right">
                </i>
              </a>
            </div>
          </div>
     
        );
    }
}

export default PreviewImageDetail;