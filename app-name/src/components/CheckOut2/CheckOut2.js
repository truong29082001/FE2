import React, { Component } from 'react';
import SpecialItem from '../Details/SpecialItemCoMd3/SpecialItem';
import GetLetterbar from '../GetNewLeteeBar/GetLetterbar';
import GetNewLetter from '../GetNewletter/GetNewLetter';
import ProductTagLeft from '../ProductLefbarTag/ProductTagLeft';
import OurBrand from '../products/OurBrand/OurBrand';

class CheckOut2 extends Component {
    render() {
        return (
            <div className="container_fullwidth">
            <div className="container">
              <div className="row">
                <div className="col-md-3">
                  <div className="special-deal leftbar" style={{marginTop: 0}}>
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
               <ProductTagLeft />
                <GetLetterbar />
                  <GetNewLetter />
                </div>
                <div className="col-md-9">
                  <div className="checkout-page">
                    <ol className="checkout-steps">
                      <li className="steps">
                        <div className="step-title">
                          01. checkout opition
                        </div>
                      </li>
                      <li className="steps active">
                        <a href="checkout.html" className="step-title">
                          02. billing information
                        </a>
                        <div className="step-description">
                          <form>
                            <div className="row">
                              <div className="col-md-6 col-sm-6">
                                <div className="your-details">
                                  <h5>
                                    Your Persional Details
                                  </h5>
                                  <div className="form-row">
                                    <label className="lebel-abs">
                                      First Name 
                                      <strong className="red">
                                        *
                                      </strong>
                                    </label>
                                    <input type="text" className="input namefild" name />
                                  </div>
                                  <div className="form-row">
                                    <label className="lebel-abs">
                                      Last Name 
                                      <strong className="red">
                                        *
                                      </strong>
                                    </label>
                                    <input type="text" className="input namefild" name />
                                  </div>
                                  <div className="form-row">
                                    <label className="lebel-abs">
                                      Email 
                                      <strong className="red">
                                        *
                                      </strong>
                                    </label>
                                    <input type="text" className="input namefild" name />
                                  </div>
                                  <div className="form-row">
                                    <label className="lebel-abs">
                                      Telephone 
                                      <strong className="red">
                                        *
                                      </strong>
                                    </label>
                                    <input type="text" className="input namefild" name />
                                  </div>
                                  <div className="form-row">
                                    <label className="lebel-abs">
                                      Fax 
                                      <strong className="red">
                                        *
                                      </strong>
                                    </label>
                                    <input type="text" className="input namefild" name />
                                  </div>
                                  <div className="form-row">
                                    <label className="lebel-abs">
                                      Company 
                                      <strong className="red">
                                        *
                                      </strong>
                                    </label>
                                    <input type="text" className="input namefild" name />
                                  </div>
                                  <div className="pass-wrap">
                                    <div className="form-row">
                                      <label className="lebel-abs">
                                        Your Password 
                                        <strong className="red">
                                          *
                                        </strong>
                                      </label>
                                      <input type="password" className="input namefild" name />
                                    </div>
                                    <div className="form-row">
                                      <label className="lebel-abs">
                                        Confird Your Password 
                                        <strong className="red">
                                          *
                                        </strong>
                                      </label>
                                      <input type="password" className="input cpass" name />
                                    </div>
                                  </div>
                                  <p>
                                    <span className="input-radio">
                                      <input type="radio" name="user" />
                                    </span>
                                    <span className="text">
                                      I wish to subscribe to the Herbal Store newsletter.
                                    </span>
                                  </p>
                                  <p>
                                    <span className="input-radio">
                                      <input type="radio" name="user" />
                                    </span>
                                    <span className="text">
                                      My delivery and billing addresses are the same.
                                    </span>
                                  </p>
                                </div>
                              </div>
                              <div className="col-md-6 col-sm-6">
                                <div className="your-details">
                                  <h5>
                                    Your Address
                                  </h5>
                                  <div className="form-row">
                                    <label className="lebel-abs">
                                      Address 01 
                                      <strong className="red">
                                        *
                                      </strong>
                                    </label>
                                    <input type="text" className="input namefild" name />
                                  </div>
                                  <div className="form-row">
                                    <label className="lebel-abs">
                                      Address 02
                                      <strong className="red">
                                        *
                                      </strong>
                                    </label>
                                    <input type="text" className="input namefild" name />
                                  </div>
                                  <div className="form-row">
                                    <label className="lebel-abs">
                                      City 
                                      <strong className="red">
                                        *
                                      </strong>
                                    </label>
                                    <input type="text" className="input namefild" name />
                                  </div>
                                  <div className="form-row">
                                    <label className="lebel-abs">
                                      Pass Code 
                                      <strong className="red">
                                        *
                                      </strong>
                                    </label>
                                    <input type="text" className="input namefild" name />
                                  </div>
                                  <div className="form-row">
                                    <label className="lebel-abs">
                                      Country 
                                      <strong className="red">
                                        *
                                      </strong>
                                    </label>
                                    <input type="text" className="input namefild" name />
                                  </div>
                                  <div className="form-row">
                                    <label className="lebel-abs">
                                      Region / State 
                                      <strong className="red">
                                        *
                                      </strong>
                                    </label>
                                    <input type="text" className="input namefild" name />
                                  </div>
                                  <p className="privacy">
                                    <span className="input-radio">
                                      <input type="radio" name="user" />
                                    </span>
                                    <span className="text">
                                      I have read and agree to the 
                                      <a href="#" className="red">
                                        Privacy Policy
                                      </a>
                                    </span>
                                  </p>
                                  <button>
                                    Continue
                                  </button>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </li>
                      <li className="steps">
                        <a href="checkout2.html" className="step-title">
                          03. Shipping information
                        </a>
                      </li>
                      <li className="steps">
                        <a href="#" className="step-title">
                          04. shipping method 
                        </a>
                      </li>
                      <li className="steps">
                        <a href="#" className="step-title">
                          05. payment information 
                        </a>
                      </li>
                      <li className="steps">
                        <a href="#" className="step-title">
                          06. oder review
                        </a>
                      </li>
                    </ol>
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

export default CheckOut2;