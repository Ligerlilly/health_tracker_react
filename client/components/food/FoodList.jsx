import React from 'react';
import Food from './Food';

export default React.createClass({
  render() {
    var foodNodes = this.props.data.map(food => <Food key={food.id} name={food.name} calories={food.calories} />);
    return <div className='foodList'>{foodNodes}</div>;
  }
});
