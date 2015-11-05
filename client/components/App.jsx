import React from 'react';
import {Navbar, NavBrand, NavItem, Nav} from 'react-bootstrap'
import {Link} from 'react-router'
import FoodBox from './food/FoodBox'
import ExerciseBox from './exercise/ExerciseBox'

export default React.createClass({
  render() {
    return <div>
      <Navbar>
        <NavBrand><Link to='/'>Health Tracker React</Link></NavBrand>
        <Nav>
          <NavItem><Link to='/about'>About</Link></NavItem>

        </Nav>
      </Navbar>
      <div className='container'>
        {this.props.children}
      </div>
    </div>;
  }
});
