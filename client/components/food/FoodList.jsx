import React from 'react';
import Food from './Food';

export default React.createClass({
  createFood(data) {
    debugger;
    this.props.writeToAPI('post', this.props.origin + '/meals', data, (meal) => {
      let meals = []
      meals.push(meal);
      this.setState({meals: meals});
    }.bind(this));
  },
  render() {
    var foodNodes = this.props.data.map(food =>
      <Food key={food.id} id={food.id} name={food.name} calories={food.calories} createFood={this.createFood}  origin={this.props.origin} />
      );
    return <div className='foodList'>{foodNodes}</div>;
  }
});
