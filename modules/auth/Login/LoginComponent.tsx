import * as React from 'react';
import LoginIcon from './LoginIcon';
import ValidationUtils from '../../common/utils/ValidationUtils';
import ErrorMessage from '../../common/components/ErrorMessage';
import { LoginService } from './LoginService'
import './Login.css'

interface Istate {
  userEmail: string;
  password: string;
  errors: {
    userEmail: string[];
    password: string[];
  }
}

interface IProps {

}
export default class LoginComponent extends React.Component<IProps, Istate> {

  private loginService: LoginService = new LoginService();

  constructor(props) {
    super(props);
    this.state = {
      userEmail: '',
      password: '',
      errors: {
        userEmail: [],
        password: []
      }
    }
    this.submitForm = this.submitForm.bind(this);
    this.changeEmailHandler = this.changeEmailHandler.bind(this);
    this.changePasswordHandler = this.changePasswordHandler.bind(this)
  }

  render() {
    {/** Auth container */ }
    return <div className="container">
      {/** Login Layout */}
      <div className="middle mt-5">

        {/** Login Header*/}
        <div className="text-center">
          <h2 className="text-red">Login Here..</h2>
        </div>
        {/** Login Form */}
        <form className="login mt-3 p-3">

          {/** Login Icon*/}
          <div className="text-center p-1">
            <LoginIcon />
          </div>

          <div className="mt-2">
            <input className="form-control" type="email" name="userEmail" onChange={this.changeEmailHandler} value={this.state.userEmail} placeholder="Enter Email" minLength={10} maxLength={30} required />
            <ErrorMessage message={this.state.errors.userEmail} />
          </div>

          <div className="mt-2">
            <input className="form-control" type="password" onChange={this.changePasswordHandler} value={this.state.password} name="password" placeholder="Enter Password" required minLength={10} maxLength={30} />
            <ErrorMessage message={this.state.errors.password} />
          </div>

          <div className="mt-4 text-center">
            <button type="button" className="btn btn-primary" onClick={this.submitForm}>Login</button>
          </div>

        </form>
      </div>
    </div>;
  }

  changeEmailHandler(e: any) {
    let alError = this.state.errors;
    const err = ValidationUtils.getError(e.target as Element, 'userEmail', e.target.value);
    alError.userEmail = err.map(el => el.err);
    this.setState({
      userEmail: e.target.value,
      errors: alError
    })
    e.preventDefault();
  }

  changePasswordHandler(e: any) {
    let alError = this.state.errors;
    const err = ValidationUtils.getError(e.target as Element, 'password', e.target.value);
    alError.password = err.map(el => el.err);
    this.setState({
      password: e.target.value
    })
    e.preventDefault();
  }

  async submitForm(e) {
    // console.log(this.state)
    this.loginService.login().subscribe(resp => {
      console.log(resp);
      console.log("api callses")
    });
  }
}