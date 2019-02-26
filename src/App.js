import React, { Component } from 'react';
import { BrowserRouter, Route , Switch } from 'react-router-dom';
import NavBar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Posts from './components/Post';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
           <NavBar />
           <Switch>
             <Route path="/" exact component={Home}></Route>
             <Route path="/about" component={About}></Route>
             <Route path="/contact" component={Contact}></Route>
             <Route path="/:post_id" component={Posts}></Route>
           </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
