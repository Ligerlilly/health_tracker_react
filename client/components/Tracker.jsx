import React from 'react';
import FoodBox from './food/FoodBox'
import ExerciseBox from './exercise/ExerciseBox'

export default React.createClass({
  render() {
    return <div className='row'>
      <h1 className='text-center'>Total daily calories</h1>
      <div className='col-md-6'><FoodBox readFromAPI={this.props.readFromAPI} origin={this.props.origin} writeToAPI={this.props.writeToAPI} /></div>
      <div className='col-md-6'><ExerciseBox /></div>
    </div>;
  }
});
