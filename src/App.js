import React, { Component } from 'react';
import { BrowserRouter ,  Route, Switch } from 'react-router-dom';

import Calculator from './Containers/Calculator'
import Converter from './Containers/Converter'

 class App extends Component {
   render(){
     return(
<BrowserRouter >
<Switch>
<Route path = '/' exact component={Calculator}></Route>
<Route path = '/converter' component={Converter}></Route>
</Switch>
</BrowserRouter>
     
     )
   }
 }

 export default App