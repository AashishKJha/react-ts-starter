import React, { Component } from 'react';


export default class VariableBindings extends Component {

  private name : string = "Test Name";

  private age : number = 20;

  render() {
    return <h1>Name Is : {this.name} & Age : {this.age} </h1>
  }

}