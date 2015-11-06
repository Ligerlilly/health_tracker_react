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
  writeToAPI(method, url, data, successFunction) {
    debugger;
    Reqwest({
      url: url,
      data: data,
      type: 'json',
      method: method,
      contentType: 'application/json',
      success: successFunction,
      error(error) {
        debugger;
        console.log(url, error['reponse']);
        location = '/';
      }
    });
  },
  render() {
    var childrenWithProps = React.cloneElement(this.props.children, {readFromAPI: this.readFromAPI, origin: this.props.origin, writeToAPI: this.writeToAPI})
    return <div>
      <Navbar>
        <NavBrand><Link to='/'>Health Tracker React</Link></NavBrand>
        <Nav>
          <Link className='navbar-brand nav-link' to='/about'>About</Link>

        </Nav>
      </Navbar>
      <div className='container'>
        {childrenWithProps}
      </div>
    </div>;
  }
});
