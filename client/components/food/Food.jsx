import React from 'react';
import {Button} from 'react-bootstrap';
export default React.createClass({
  handleSubmit(e) {
    e.preventDefault;
    let meal = {meal: {day_id: this.refs.day_id.value, user_id: this.refs.user_id.value, food_id: this.refs.id.value}};
    this.props.createMeal(JSON.stringify(meal));
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
          <span>calories:
            <h4 className='inline' ref='calories'>{this.props.calories} </h4>
          </span>
          <Button bsStyle="success" bsSize="xs" type='submit' >
             Meal
          </Button>
        </form>
      </div>
    );
  }
});
