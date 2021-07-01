
import { Fragment } from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Navbar from './conponents/Navbar';

import Home from './conponents/page/Home';
import About from './conponents/page/About';
import Conter from './conponents/page/Conter';
import Serves from './conponents/page/Serves';


function App() {
  return (
        <Fragment>
          <Router>
            <Navbar />
            <Switch>
              <div className="page">
                <Route exact path = "/" component = {Home} />
                <Route exact path = "/About" component = {About} />
                <Route exact path = "/Conter" component = {Conter} />
                <Route exact path = "/Serves" component = {Serves} />
              </div>
            </Switch>
          </Router>
        </Fragment>
  );
}

export default App;
