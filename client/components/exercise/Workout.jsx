import React from 'react';
import {Button} from 'react-bootstrap';
export default React.createClass({
  handleSubmit(e) {
    e.preventDefault();
    let data = {workout: {id: this.props.id, bCals: this.props.cals_per_hour / 60 * this.props.duration}};
    this.props.deleteWorkout(JSON.stringify(data), this.props.id);
  },
  render() {
    return (
      <div className='meal'>
        <form onSubmit={this.handleSubmit}>
          <span>
            <h4 className='inline' ref='name'>{this.props.name} </h4>
          </span>
          <span>calories burned:
            <h4 className='inline' ref='calories'>{this.props.cals_per_hour / 60 * this.props.duration} </h4>
          </span>
          <Button bsStyle='danger' bsSize='xs' type='submit'>
            delete
          </Button>
        </form>
      </div>
    );
  }
});
