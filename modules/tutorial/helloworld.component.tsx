import React, {Component} from 'react'

export default class HelloWordComponent extends Component {
  private element : JSX.Element = <div><h2>Hello World</h2></div>;

  render() {
    return this.element;
  }
}