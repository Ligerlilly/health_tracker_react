import React from 'react';
import {Button} from 'react-bootstrap';
export default React.createClass({
  handleSubmit(e) {
    debugger;
    e.preventDefault;
    let meal = {meal: {day_id: '1', user_id: '1', food_id: this.refs.id.value}};
    this.props.createFood(JSON.stringify(meal));
  },
  render() {
    return <div>
      <form onSubmit={this.handleSubmit}>
       <input type='hidden' value={this.props.id} ref='id' />
        <span>
          <h4 className='inline' ref='name'>{this.props.name} </h4>
        </span>
        <span>calories:
          <h4 className='inline' ref='calories'>{this.props.calories} </h4>
        </span>
        <Button bsStyle="success" bsSize="xs" type='submit' >
           Meal
        </Button>
      </form>
    </div>;
  }
});
