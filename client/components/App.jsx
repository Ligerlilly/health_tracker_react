import React from 'react';
import {Navbar, NavBrand, NavItem, Nav} from 'react-bootstrap';
import {Link} from 'react-router';
import FoodBox from './food/FoodBox';
import ExerciseBox from './exercise/ExerciseBox';
import Reqwest from 'reqwest';


import Chart from './Chart';

var sampleData = [
  {id: '5fbmzmtc', x: 7, y: 41, z: 6},
  {id: 's4f8phwm', x: 11, y: 45, z: 9},
];
export default React.createClass({
  getDefaultProps() {
    return { origin: process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : ''};
  },
  getInitialState() {
    return {
      data: sampleData,
      domain: {x: [0, 30], y: [0, 100]}
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
  render() {
    var childrenWithProps = React.cloneElement(this.props.children, {readFromAPI: this.readFromAPI, origin: this.props.origin, writeToAPI: this.writeToAPI})
    return <div>
      <Navbar inverse>
        <NavBrand><Link to='/'>Health Tracker React</Link></NavBrand>
        <Nav>
          <Link className='navbar-brand nav-link' to='/about'>About</Link>

        </Nav>
      </Navbar>
      <div className='container'>
        <Chart data={this.state.data} domain={this.state.domain} />
        {childrenWithProps}
      </div>
    </div>;
  }
});
