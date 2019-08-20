import React, { Component } from 'react';

interface IRegisterProps{

}

interface IRegisterStates {
  userEmail : string;
  password : string;
}

export default class SignupComponent extends Component<IRegisterProps, IRegisterStates> {

  constructor(props) {
    super(props);
    this.state = {
      userEmail: null,
      password: null
    }
    this.submitForm = this.submitForm.bind(this);
    this.changeEmailHandler = this.changeEmailHandler.bind(this);
    this.changePasswordHandler = this.changePasswordHandler.bind(this)
  }

  render() {
    return <div className="container">
      <div className="middle mt-5">
        <div className="text-center">
          <h2 className="text-red">Register Here..</h2>
        </div>
        <form className="login mt-3 p-3">
          <div className="text-center p-1">
    
          </div>
          <div className="mt-2">
            <input className="form-control" type="email" name="userEmail" onChange={this.changeEmailHandler} value={this.state.userEmail} placeholder="Enter Email" />
          </div>
          <div className="mt-2">
            <input className="form-control" type="password" onChange={this.changePasswordHandler} value={this.state.password} name="password" placeholder="Enter Password" />
          </div>

          <div className="mt-4 text-center">
            <button type="button" className="btn btn-primary" onClick={this.submitForm}>Login</button>
          </div>
        </form>
      </div>
    </div>;
  }


  changeEmailHandler(e: any) {
    this.setState({
      userEmail: e.target.value
    })
    e.preventDefault();
  }

  changePasswordHandler(e: any) {
    this.setState({
      password: e.target.value
    })
    e.preventDefault();
  }

  submitForm(e) {
    console.log(this.state)
  }
}