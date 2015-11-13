import React from 'react';
import {Navbar, NavBrand, NavItem, Nav} from 'react-bootstrap';
import {Link} from 'react-router';
import FoodBox from './food/FoodBox';
import ExerciseBox from './exercise/ExerciseBox';
import Reqwest from 'reqwest';


export default React.createClass({
  getDefaultProps() {
    return { origin: process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : ''};
  },
  getInitialState() {
    return {
      exercises: [],
      calsArray: [],
      totalCals: 0
    }
  },
  readFromAPI(url, successFunction) {
    Reqwest({
      url: url,
      type: 'json',
      method: 'get',
      contentType: 'application/json',
      success: successFunction,
      error(error) {
        console.log(url, error['response']);
        location = '/';
      }
    });
  },
  writeToAPI(method, url, data, successFunction) {
    Reqwest({
      url: url,
      data: data,
      type: 'json',
      method: method,
      contentType: 'application/json',
      success: successFunction,
      error(error) {
        console.log(url, error['reponse']);
        location = '/';
      }
    });
  },
  eatenCals(cals) {
    // let tCals = this.state.totalCals;
    // tCals = tCals + cals;
    // this.setState({totalCals: tCals});
    this.setState({calsArray: this.state.calsArray.concat([cals])});
  },
  burnedCals(cals) {
    // let tCals = this.state.totalCals;
    // tCals = tCals -cals;
    this.setState({exercises: this.state.exercises.concat([cals])});
  },
  render() {
    var childrenWithProps = React.cloneElement(this.props.children, { exercises: this.state.exercises, calsArray: this.state.calsArray, eatenCals: this.eatenCals, burnedCals: this.burnedCals, readFromAPI: this.readFromAPI, origin: this.props.origin, writeToAPI: this.writeToAPI})
    return <div>
      <Navbar inverse>
        <NavBrand><Link to='/'>Health Tracker React</Link></NavBrand>
        <Nav>
          <Link className='navbar-brand nav-link' to='/about'>About</Link>

        </Nav>
      </Navbar>
      <div className='container'>

        <h1 className='text-center'>Total daily calories {this.state.totalCals}</h1>
        {childrenWithProps}
      </div>
    </div>;
  }
});
