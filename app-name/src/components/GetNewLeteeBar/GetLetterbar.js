import React, { Component } from 'react';

class GetLetterbar extends Component {
    render() {
        return (
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
        );
    }
}

export default GetLetterbar;