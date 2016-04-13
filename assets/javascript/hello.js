import React, {Component} from 'react';

class HelloWorld extends Component {
  render() {
    return <h1>Hello {this.props.you}, from React</h1>
  }
}

export default HelloWorld;