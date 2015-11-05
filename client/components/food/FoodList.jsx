import React from 'react';
import Food from './Food';

export default React.createClass({
  render() {
    let foodNodes = this.props.data.map(food => <Food name={food.name} calories={food.calories} />);
    return <div className='foodList'>{foodNodes}</div>;
  }
});
