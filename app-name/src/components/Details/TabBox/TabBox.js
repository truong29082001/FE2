import React, { Component } from 'react';

class TabBox extends Component {
    render() {
        return (
            <div className="tab-box">
                    <div id="tabnav">
                      <ul>
                        <li>
                          <a href="#Descraption">
                            DESCRIPTION
                          </a>
                        </li>
                        <li>
                          <a href="#Reviews">
                            REVIEW
                          </a>
                        </li>
                        <li>
                          <a href="#tags">
                            PRODUCT TAGS
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="tab-content-wrap">
                      <div className="tab-content" id="Descraption">
                        <p>
                          Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lorem nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultri ces posuere cubilia curae Aenean eleifend laoreet congue. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lorem nunc. Vestibu um ante ipsum primis in faucibus orci luctus et ultri ces posuere cubilia curae Aenean eleifend laoreet congue. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lorem nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultri ces posuere cubilia curae Aenean eleifend laoreet congue. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lorem nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultri ces posuere cubilia curae...
                        </p>
                        <p>
                          Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lorem nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultri ces posuere cubilia curae Aenean eleifend laoreet congue. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lorem nunc. Vestibu um ante ipsum primis in faucibus orci luctus et ultri ces posuere cubilia curae Aenean eleifend laoreet congue. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lorem nunc...
                        </p>
                      </div>
                      <div className="tab-content" id="Reviews">
                        <form>
                          <table>
                            <thead>
                              <tr>
                                <th>
                                  &nbsp;
                                </th>
                                <th>
                                  1 star
                                </th>
                                <th>
                                  2 stars
                                </th>
                                <th>
                                  3 stars
                                </th>
                                <th>
                                  4 stars
                                </th>
                                <th>
                                  5 stars
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  Quality
                                </td>
                                <td>
                                  <input type="radio" name="quality" defaultValue="Blue" />
                                </td>
                                <td>
                                  <input type="radio" name="quality" defaultValue />
                                </td>
                                <td>
                                  <input type="radio" name="quality" defaultValue />
                                </td>
                                <td>
                                  <input type="radio" name="quality" defaultValue />
                                </td>
                                <td>
                                  <input type="radio" name="quality" defaultValue />
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  Price
                                </td>
                                <td>
                                  <input type="radio" name="price" defaultValue />
                                </td>
                                <td>
                                  <input type="radio" name="price" defaultValue />
                                </td>
                                <td>
                                  <input type="radio" name="price" defaultValue />
                                </td>
                                <td>
                                  <input type="radio" name="price" defaultValue />
                                </td>
                                <td>
                                  <input type="radio" name="price" defaultValue />
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  Value
                                </td>
                                <td>
                                  <input type="radio" name="value" defaultValue />
                                </td>
                                <td>
                                  <input type="radio" name="value" defaultValue />
                                </td>
                                <td>
                                  <input type="radio" name="value" defaultValue />
                                </td>
                                <td>
                                  <input type="radio" name="value" defaultValue />
                                </td>
                                <td>
                                  <input type="radio" name="value" defaultValue />
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <div className="row">
                            <div className="col-md-6 col-sm-6">
                              <div className="form-row">
                                <label className="lebel-abs">
                                  Your Name 
                                  <strong className="red">
                                    *
                                  </strong>
                                </label>
                                <input type="text" name className="input namefild" />
                              </div>
                              <div className="form-row">
                                <label className="lebel-abs">
                                  Your Email 
                                  <strong className="red">
                                    *
                                  </strong>
                                </label>
                                <input type="email" name className="input emailfild" />
                              </div>
                              <div className="form-row">
                                <label className="lebel-abs">
                                  Summary of You Review 
                                  <strong className="red">
                                    *
                                  </strong>
                                </label>
                                <input type="text" name className="input summeryfild" />
                              </div>
                            </div>
                            <div className="col-md-6 col-sm-6">
                              <div className="form-row">
                                <label className="lebel-abs">
                                  Your Name 
                                  <strong className="red">
                                    *
                                  </strong>
                                </label>
                                <textarea className="input textareafild" name rows={7} defaultValue={"                            "} />
                              </div>
                              <div className="form-row">
                                <input type="submit" defaultValue="Submit" className="button" />
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                      <div className="tab-content">
                        <div className="review">
                          <p className="rating">
                            <i className="fa fa-star light-red">
                            </i>
                            <i className="fa fa-star light-red">
                            </i>
                            <i className="fa fa-star light-red">
                            </i>
                            <i className="fa fa-star-half-o gray">
                            </i>
                            <i className="fa fa-star-o gray">
                            </i>
                          </p>
                          <h5 className="reviewer">
                            Reviewer name
                          </h5>
                          <p className="review-date">
                            Date: 01-01-2014
                          </p>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a eros neque. In sapien est, malesuada non interdum id, cursus vel neque.
                          </p>
                        </div>
                        <div className="review">
                          <p className="rating">
                            <i className="fa fa-star light-red">
                            </i>
                            <i className="fa fa-star light-red">
                            </i>
                            <i className="fa fa-star light-red">
                            </i>
                            <i className="fa fa-star-half-o gray">
                            </i>
                            <i className="fa fa-star-o gray">
                            </i>
                          </p>
                          <h5 className="reviewer">
                            Reviewer name
                          </h5>
                          <p className="review-date">
                            Date: 01-01-2014
                          </p>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a eros neque. In sapien est, malesuada non interdum id, cursus vel neque.
                          </p>
                        </div>
                      </div>
                      <div className="tab-content" id="tags">
                        <div className="tag">
                          Add Tags : 
                          <input type="text" name />
                          <input type="submit" defaultValue="Tag" />
                        </div>
                      </div>
                    </div>
                  </div>
                 
        );
    }
}

export default TabBox;