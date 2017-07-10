import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import '../styles/style.css';

// Component imports
import Header from './nav/Header';
import Footer from './nav/Footer';

import Home from './Home';
import Contact from './Contact';

const App = () => {
  return (
    <Router>
      <div id="page">
        <Header />
        <div id="container-wrapper">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
