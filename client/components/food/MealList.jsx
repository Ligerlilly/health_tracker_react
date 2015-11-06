import React from 'react';
import Meal from './Meal';

export default React.createClass({
  render() {
    var mealNodes = this.props.data.map(meal => {
      return <Meal key={meal.id} id={meal.id} name={meal.food.name} calories={meal.food.calories} deleteMeal={this.props.deleteMeal} />
    });
    return (
      <div className='mealList'>
        <h3>Meals</h3>
        {mealNodes}
      </div>
    );
  }
});
