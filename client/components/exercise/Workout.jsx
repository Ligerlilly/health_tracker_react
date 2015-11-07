import React from 'react';
import {Button} from 'react-bootstrap';
export default React.createClass({
  handleSubmit() {
    let data = {workout: {id: this.props.id}};
    this.props.deleteWorkout(JSON.stringify(data), this.props.id);
  },
  render() {
    return (
      <div className='meal'>
        <form onSubmit={this.handleSubmit}>
          <span>
            <h4 className='inline' ref='name'>{this.props.name} </h4>
          </span>
          <span>calories:
            <h4 className='inline' ref='calories'>{this.props.cals_per_hour} </h4>
          </span>
          <Button bsStyle='danger' bsSize='xs' type='submit'>
            delete
          </Button>
        </form>
      </div>
    );
  }
});
