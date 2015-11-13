import React from 'react';
import ExerciseList from './ExerciseList';
import WorkoutList from './WorkoutList';
import BarChart from '../chart/BarChart';

export default React.createClass({
  getInitialState() {
    return {data: [], exercises: [], workouts: [], bCals: 0};
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
      let totalCals = 0;
      workouts.forEach(workout => {
        totalCals += workout.exercise.cals_per_hour / 60 * workout.duration;
      });
      this.setState({bCals: totalCals});
      //this.props.burnedCals(totalCals);
      this.setState({workouts: workouts});
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
      let totalBCals = this.state.bCals;
      totalBCals += (workout.exercise.cals_per_hour / 60) * workout.duration;
      this.setState({bCals: totalBCals});
      this.props.burnedCals(workout.exercise.cals_per_hour / 60 * workout.duration);

    }.bind(this));
  },
  deleteWorkout(data, id) {
    this.props.writeToAPI('delete', this.props.origin + "/workouts/" + id, data, (workouts) => {
      let totalBCals = 0;
      workouts.forEach(workout => {
        totalBCals += (workout.exercise.cals_per_hour / 60) * workout.duration;
      });

      if (workouts !== null) {
        this.setState({workouts: workouts});
        this.setState({bCals: totalBCals});
      }
      else {
        this.setSate({workouts: []});
        this.setState({bCals: 0});
      }
    });
    let parsedData = JSON.parse(data);
    this.props.eatenCals(parsedData.workout.bCals);
  },
  render() {
    return <div>
      <h2>Exercises</h2>
      <h3>Calories burned today: {this.state.bCals}</h3>
      <BarChart cals={this.props.exercises} color={'green'} className='inline'/>
      <input type='text' placeholder='Search for an exercise:' className='form-control' onKeyUp={this.onKeyUp} ref='exerciseSearch' id='exerciseSearch'/>
      <ExerciseList data={this.state.exercises} writeToAPI={this.props.writeToAPI} origin={this.props.origin} input={this.refs.exerciseSearch} createWorkout={this.createWorkout} />
      <WorkoutList data={this.state.workouts} deleteWorkout={this.deleteWorkout} />

    </div>;
  }
});
