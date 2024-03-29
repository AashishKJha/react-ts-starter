import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import ReactDOM, { render } from 'react-dom';
import Login from './login';
import HelloWordComponent from './modules/tutorial/helloworld.component';
import VariableBindings from './modules/tutorial/Bindings';
import ComponentProps from './modules/tutorial/Props';
import { LoginComponent } from './modules/auth'
import SignupComponent from './modules/auth/Signup/SignupComponent'
import './style.css';
import BasicExample from './modules/appRoute';

interface AppProps { }
interface AppState { 
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <LoginComponent/>
        </div>
    );
  }
}

render(<App />, document.getElementById('root'));
ReactDOM.render(<BasicExample />, document.getElementById('route'));