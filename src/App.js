import React, { Component } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route} from "react-router-dom"
import Main from './Route/Main';
import Mondai1 from './Route/Mondai1';
import Mondai2 from './Route/Mondai2';
import Mondai3 from './Route/Mondai3';
import Mondai4 from './Route/Mondai4';
import Mondai5 from './Route/Mondai5';
import Mondai6 from './Route/Mondai6';
import Mondai7 from './Route/Mondai7';
import Mondai8 from './Route/Mondai8';
import Mondai9 from './Route/Mondai9';
import Mondai10 from './Route/Mondai10';
import Kakunin from './Route/Kakunin';
import Admin from './Route/Admin'

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Route exact path="/" component={Main}/>
          <Route exact path="/mon1" component={Mondai1}/>
          <Route exact path="/mon2" component={Mondai2}/>
          <Route exact path="/mon3" component={Mondai3}/>
          <Route exact path="/mon4" component={Mondai4}/>
          <Route exact path="/mon5" component={Mondai5}/>
          <Route exact path="/mon6" component={Mondai6}/>
          <Route exact path="/mon7" component={Mondai7}/>
          <Route exact path="/mon8" component={Mondai8}/>
          <Route exact path="/mon9" component={Mondai9}/>
          <Route exact path="/mon10" component={Mondai10}/>
          <Route exact path="/kakunin" component={Kakunin}/>
          <Route exact path="/admin" component={Admin}/>
        </Router>
      </div>
    )
  }
}
