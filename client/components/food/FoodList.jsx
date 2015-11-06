import React from 'react';
import Food from './Food';

export default React.createClass({
  render() {
    var foodNodes = this.props.data.map(food =>
      <Food key={food.id} id={food.id} name={food.name} calories={food.calories} createMeal={this.props.createMeal}  origin={this.props.origin} input={this.props.input}/>
      );
    return <div className='foodList'>{foodNodes}</div>;
  }
});
