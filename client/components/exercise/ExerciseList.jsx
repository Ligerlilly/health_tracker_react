import React from 'react';
import Exercise from './Exercise';

export default React.createClass({
  render() {
    var exerciseNodes = this.props.data.map(exercise =>
      <Exercise key={exercise.id} id={exercise.id} name={exercise.name} calsPerHour={exercise.cals_per_hour} createWorkout={this.props.createWorkout} origin={this.props.origin} input={this.props.input}/>
      );
    return <div className='exerciseList'>{exerciseNodes}</div>;
  }
});
