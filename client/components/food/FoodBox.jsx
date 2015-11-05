import React from 'react';
import FoodList from './FoodList';

export default React.createClass({
  getInitialState() {
    return {data: [], food: []};
  },
  componentDidMount() {
    this.readFoodsFromAPI()
  },
  readFoodsFromAPI() {
    this.props.readFromAPI(this.props.origin + '/foods', (foods) => {

      this.setState({data: foods})

    }.bind(this));
  },
  onKeyUp(e) {
    e.preventDefault
    let foods = [];
    this.state.data.forEach((food)=> {
      if (food.name.includes(this.refs.foodSearch.value.toLowerCase())) {
        foods.push(food);
      }
      this.setState({food: foods})
    })


  },
  render() {
    return <div>
      <h3>foods</h3>
      <input type='text' placeholder='Search for a food:' className='form-control' onKeyUp={this.onKeyUp} ref='foodSearch'/>
      <FoodList data={this.state.food} />
    </div>;
  }
});
