import React, { Component } from "react";

export default class Demo extends Component {
  constructor(props) {
    super();
    console.log(this.props);
  }

  render() {
    return <div>Demo Component</div>;
  }
}
