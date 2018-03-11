import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Wrapper from './Wrapper';
import { NavLink } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
      <NavLink
        to='/view1'
        style={{
          fontWeight: 'bold',
          color: 'darkgreen'
        }}
      >Go to view 1</NavLink>
      <NavLink
        to='/view2'
        style={{
          fontWeight: 'bold',
          color: 'red'
        }}
      >Go to view 2</NavLink>
      <Switch>
        <Route
          path='/view1'
          render={(props) => <Wrapper {...props} idView='view_1' />}/>
        <Route
          path='/view2'
          render={(props) => <Wrapper {...props} idView='view_2' />}/>
        <Route
          path='/'
          render={(props) => <Wrapper {...props} idView='view_1' />}/>
      </Switch>
      </div>
    );
  }
}

export default App;
