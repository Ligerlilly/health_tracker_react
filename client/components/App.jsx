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
  render() {
    var childrenWithProps = React.cloneElement(this.props.children, {readFromAPI: this.readFromAPI, origin: this.props.origin})
    return <div>
      <Navbar>
        <NavBrand><Link to='/'>Health Tracker React</Link></NavBrand>
        <Nav>
          <NavItem><Link to='/about'>About</Link></NavItem>

        </Nav>
      </Navbar>
      <div className='container'>
        {childrenWithProps}
      </div>
    </div>;
  }
});
