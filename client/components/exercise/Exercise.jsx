import React from 'react';
import {Button} from 'react-bootstrap';
export default React.createClass({
  handleSubmit(e) {
    e.preventDefault();
    let workout = {workout: {day_id: this.refs.day_id.value, user_id: this.refs.user_id.value, exercise_id: this.props.id, duration: this.refs.duration.value}};
    this.props.createWorkout(JSON.stringify(workout));
    this.props.input.value = '';
    this.props.input.blur();
  },
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
         <input type='hidden' value={this.props.id} ref='id' />
         <input type='hidden' value='1' ref='user_id' />
         <input type='hidden' value='1' ref='day_id' />
          <span>
            <h4 className='inline' ref='name'>{this.props.name} </h4>
          </span>
          <span>calories burned per hour:
            <h4 className='inline' ref='calories'>{this.props.calsPerHour} </h4>
          </span>
          <input type='text' id='duration' className='form-control' placeholder='Enter duration in mins' ref='duration' />
          <Button bsStyle="success" bsSize="xs" type='submit' >
             Workout
          </Button>
        </form>
      </div>
    );
  }
});
