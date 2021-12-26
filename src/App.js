import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './componenets/Home/index';
import Header from "./componenets/header/index";
import MovieDetails from "./componenets/MovieDetails";
import NotFound from "./componenets/page404/index";
import Footer from "./componenets/footer/index";
import './App.scss';

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <div className="container">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/movie/:imdbID" exact component={MovieDetails} />
          <Route component={NotFound} />
        </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
