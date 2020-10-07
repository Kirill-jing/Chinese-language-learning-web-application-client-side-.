import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../store/actions/actions";

class Main extends Component {
  render() {
    return <div>Статьи</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    sun: state.sign.sun,
  };
};

export default connect(mapStateToProps)(Main);
