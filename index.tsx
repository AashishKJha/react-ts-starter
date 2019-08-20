import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'

import { render } from 'react-dom';
import Login from './login';
import HelloWordComponent from './modules/tutorial/helloworld.component';
import VariableBindings from './modules/tutorial/Bindings';
import ComponentProps from './modules/tutorial/Props';
import LoginComponent from './modules/auth/Login/LoginComponent'
import SignupComponent from './modules/auth/Signup/SignupComponent'
import './style.css';

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