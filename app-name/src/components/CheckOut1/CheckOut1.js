import React, { Component } from 'react';
import SpecialItem from '../Details/SpecialItemCoMd3/SpecialItem';
import GetLetterbar from '../GetNewLeteeBar/GetLetterbar';
import GetNewLetter from '../GetNewletter/GetNewLetter';
import ProductTagLeft from '../ProductLefbarTag/ProductTagLeft';
import OurBrand from '../products/OurBrand/OurBrand';

class CheckOut1 extends Component {
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
                      <li className="steps active">
                        <a href="checkout.html" className="step-title">
                          01. checkout opition
                        </a>
                        <div className="step-description">
                          <div className="row">
                            <div className="col-md-6 col-sm-6">
                              <div className="new-customer">
                                <h5>
                                  New Customer
                                </h5>
                                <label>
                                  <span className="input-radio">
                                    <input type="radio" name="user" />
                                  </span>
                                  <span className="text">
                                    I wish to subscribe to the Herbal Store newsletter.
                                  </span>
                                </label>
                                <label>
                                  <span className="input-radio">
                                    <input type="radio" name="user" />
                                  </span>
                                  <span className="text">
                                    My delivery and billing addresses are the same.
                                  </span>
                                </label>
                                <p className="requir">
                                  By creating an account you will be able to shop faste be up to date on an order's status, and keep track of the orders you have previously made.
                                </p>
                                <button>
                                  Continue
                                </button>
                              </div>
                            </div>
                            <div className="col-md-6 col-sm-6">
                              <div className="run-customer">
                                <h5>
                                  Rerunning Customer
                                </h5>
                                <form>
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
                                      Password 
                                      <strong className="red">
                                        *
                                      </strong>
                                    </label>
                                    <input type="text" className="input namefild" name />
                                  </div>
                                  <p className="forgoten">
                                    <a href="#">
                                      Forgoten your password?
                                    </a>
                                  </p>
                                  <button>
                                    Login
                                  </button>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="steps">
                        <a href="checkout2.html" className="step-title">
                          02. billing information
                        </a>
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

export default CheckOut1;