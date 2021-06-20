import {
  BrowserRouter as Router,

} from "react-router-dom";
import Footer from '../Footer/Footer';
import Headers from '../Header/Headers';


import RouterURL from '../RouterURL/RouterURL';
import './App.css';

function App() {
  return (

    <Router>
      <div className="wrapper">
        <Headers />
        <div className="clearfix" />

        <RouterURL></RouterURL>
        <div className="clearfix" />

        <Footer />
      </div>
    </Router>

  );
}

export default App;
