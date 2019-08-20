import React,{ Component } from 'react';


export default class ComponentProps extends React.Component {

  constructor(props) {
    super(props);
    /** initialize state */
    this.state = { name : "aaahsih" };
  }
   
  render() {
    return <div><h1 className="test">Props Passed : {JSON.stringify(this.props)}</h1>
    <p>state : {this.state.name}</p></div>
  }

  updateName() {
    this.setState((state, props) => ({
      name : state.name + "jha"
    }));
  }
}