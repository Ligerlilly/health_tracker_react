import React from 'react';
import FoodList from './FoodList';
import MealList from './MealList';

export default React.createClass({
  getInitialState() {
    return {data: [], foods: [], meals: []};
  },
  componentDidMount() {
    this.readFoodsFromAPI();
    this.readMealsFromAPI();
  },
  readFoodsFromAPI() {
    this.props.readFromAPI(this.props.origin + '/foods', (foods) => {
      this.setState({data: foods})
    }.bind(this));
  },
  readMealsFromAPI() {
    this.props.readFromAPI(this.props.origin + '/meals', (meals) => {
      this.setState({meals: meals})
    }.bind(this));
  },
  onKeyUp(e) {
    e.preventDefault
    let foods = [];
    this.state.data.forEach((food)=> {
      if (food.name.includes(this.refs.foodSearch.value.toLowerCase())) {
        foods.push(food);
      }
      this.setState({foods: foods})
    })
  },
  createMeal(data) {
    this.props.writeToAPI('post', this.props.origin + '/meals', data, (meal) => {
      let meals = this.state.meals
      meals.unshift(meal);
      this.setState({meals: meals});
      this.setState({foods: []})
    }.bind(this));
  },
  render() {
    return (
      <div>
        <h3>foods</h3>
        <input type='text' placeholder='Search for a food:' className='form-control' onKeyUp={this.onKeyUp} ref='foodSearch' id='foodSearch'/>
        <FoodList data={this.state.foods} writeToAPI={this.props.writeToAPI} origin={this.props.origin} input={this.refs.foodSearch} createMeal={this.createMeal} />
        <MealList data={this.state.meals} />
      </div>
    );
  }
});
