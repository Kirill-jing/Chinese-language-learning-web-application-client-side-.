import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Calculator from "./Containers/Calculator";
import Converter from "./Containers/Converter";
import NavLinks from "./shared/Nav";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          {/* <NavLinks /> */}
          <Switch>
            <Route path="/" exact component={Calculator}></Route>
            <Route path="/converter" exact component={Converter}></Route>
            <Route path="/converter/3" exact component={Converter}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
