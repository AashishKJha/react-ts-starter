import React, {Component} from 'react';
import './Errors'

interface IProps {
  message : any[]
}
interface IState {
  // errors : any[];
}
export default class ErrorMessage extends Component<IProps, IState> {
  constructor(props) {
    super(props);

  }

  render() {
    let message = [];
    const errors = this.props.message;
    if(errors && errors.length > 0) {
      errors.forEach(e => {
      message.push(<p className="error" key={e}> Error : {e}</p>)
    })
    }
    return message;
  }
}