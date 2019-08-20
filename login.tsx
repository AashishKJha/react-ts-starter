import * as React from 'react';

/**
 * In Login Component Implement
 * 
 * 1. Create login Login
 * 2. Try to integrate with backend api.
 */
export default class LoginComponent extends React.Component {

  private LoginView = <div><h1>Login Component</h1></div>

  render() {
    return this.LoginView;
  }
}

class ts {
  private static _instance : ts = new ts();

  public static getInstance() {
    return this._instance;
  }

  public myData() {
    return "demo";
  }
}

const tsObj = ts.getInstance();
console.log(tsObj.myData())