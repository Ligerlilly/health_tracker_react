import React from 'react';
import FoodBox from './food/FoodBox'
import ExerciseBox from './exercise/ExerciseBox'


export default React.createClass({
  render() {
    return <div className='row'>
      <div className='col-md-6'><FoodBox calsArray={this.props.calsArray} burnedCals={this.props.burnedCals} eatenCals={this.props.eatenCals} readFromAPI={this.props.readFromAPI} origin={this.props.origin} writeToAPI={this.props.writeToAPI} /></div>
      <div className='col-md-6'><ExerciseBox exercises={this.props.exercises} eatenCals={this.props.eatenCals} burnedCals={this.props.burnedCals} readFromAPI={this.props.readFromAPI} origin={this.props.origin} writeToAPI={this.props.writeToAPI} /></div>
    </div>;
  }
});
