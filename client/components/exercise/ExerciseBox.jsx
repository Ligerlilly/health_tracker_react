import React from 'react';
import ExerciseList from './ExerciseList';
import WorkoutList from './WorkoutList';

export default React.createClass({
  getInitialState() {
    return {data: [], exercises: [], workouts: []};
  },
  componentDidMount() {
    this.readExercisesFromAPI();
    this.readWorkoutsFromAPI();
  },
  readExercisesFromAPI() {
    this.props.readFromAPI(this.props.origin + '/exercises', (exercises) => {
      this.setState({data: exercises})
    }.bind(this));
  },
  readWorkoutsFromAPI() {
    this.props.readFromAPI(this.props.origin + '/workouts', (workouts) => {
      this.setState({workouts: workouts})
    }.bind(this));
  },
  onKeyUp(e) {
    e.preventDefault
    let exercises = [];
    this.state.data.forEach((exercise)=> {
      if (exercise.name.includes(this.refs.exerciseSearch.value.toLowerCase())) {
        exercises.push(exercise);
      }
      this.setState({exercises: exercises});
    });

  },
  createWorkout(data) {
    this.props.writeToAPI('post', this.props.origin + '/workouts', data, (workout) => {
      let workouts = this.state.workouts
      workouts.unshift(workout);
      this.setState({workouts: workouts});
      this.setState({exercises: []})
      // let totalCals = this.state.tCals;
      // totalCals += workout.exercise.calories;
      // this.setState({tCals: totalCals});
    }.bind(this));
  },
  deleteWorkout(data, id) {
    this.props.writeToAPI('delete', this.props.origin + "/workouts/" + id, data, (workouts) => {
      let totalCals = 0;
      // workouts.forEach(workout => {
      //   totalCals += workout.exercise.calories;
      // });
      // this.setState({tCals: totalCals});
      this.setState({workouts: workouts});
    })
  },
  render() {
    return <div>
      <h2>Exercises</h2>
      <h3>Calories burned today: </h3>
      <input type='text' placeholder='Search for an exercise:' className='form-control' onKeyUp={this.onKeyUp} ref='exerciseSearch' id='exerciseSearch'/>
      <ExerciseList data={this.state.exercises} writeToAPI={this.props.writeToAPI} origin={this.props.origin} input={this.refs.exerciseSearch} createWorkout={this.createWorkout} />
      <WorkoutList data={this.state.workouts} deleteWorkout={this.deleteWorkout} />

    </div>;
  }
});
