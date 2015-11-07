import React from 'react';
import Workout from './Workout';

export default React.createClass({
  render() {
    var workoutNodes = this.props.data.map(workout => {
      return <Workout key={workout.id} id={workout.id} name={workout.exercise.name} cals_per_hour={workout.exercise.cals_per_hour} deleteWorkout={this.props.deleteWorkout} />
    });
    return (
      <div className='mealList'>
        <h3>Workouts</h3>
        {workoutNodes}
      </div>
    );
  }
});
