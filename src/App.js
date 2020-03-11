import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import "./App.module.scss"

import ScrollTop from "./components/ScrollTop"

import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';
import Index from './pages/Index';
import Terms from './pages/Terms';
import FAQ from "./pages/FAQ";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollTop />
        <Nav />
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/terms" component={Terms} />
          <Route exact path="/faq" component={FAQ} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
