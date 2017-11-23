import React, { Component } from 'react';
import './App.css';
import {Route, Redirect, Switch} from 'react-router-dom';
import photo from './Images/main-photo.jpg';

// importing components
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import About from './Components/About';
import Work from './Components/Work';
import Projects from './Components/Projects';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/about" component={About} />
              <Route exact path="/work" component={Work} />
              <Route exact path="/projects" component={Projects} />
              <Redirect to="/" />
            </Switch>
        </main>
        <Footer />  
      </div>
    );
  }
}

export default App;
