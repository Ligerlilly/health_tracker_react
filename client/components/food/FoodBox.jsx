import React from 'react';
import FoodList from './FoodList';
import MealList from './MealList';

export default React.createClass({
  getInitialState() {
    return {data: [], foods: [], meals: [], tCals: 0};
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
      let totalCals = 0;
      meals.forEach(meal => {
        totalCals += meal.food.calories;
      });
      this.setState({tCals: totalCals});
      this.setState({meals: meals});
      this.props.eatenCals(totalCals);
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
      let totalCals = this.state.tCals;
      totalCals += meal.food.calories;
      this.setState({tCals: totalCals});
      this.props.eatenCals(totalCals);
    }.bind(this));
  },
  deleteMeal(data, id) {
    this.props.writeToAPI('delete', this.props.origin + "/meals/" + id, data, (meals) => {
      let totalCals = 0;
      meals.forEach(meal => {
        totalCals += meal.food.calories;
      });
      this.setState({tCals: totalCals});
      this.setState({meals: meals});
    });
    let parsedData = JSON.parse(data);
    this.props.burnedCals(parsedData.meal.calories);
  },
  render() {
    return (
      <div>
        <h2>Foods</h2>
        <h3>Calories eaten today: {this.state.tCals}</h3>
        <input type='text' placeholder='Search for a food:' className='form-control' onKeyUp={this.onKeyUp} ref='foodSearch' id='foodSearch'/>
        <FoodList data={this.state.foods} writeToAPI={this.props.writeToAPI} origin={this.props.origin} input={this.refs.foodSearch} createMeal={this.createMeal} />
        <MealList data={this.state.meals} deleteMeal={this.deleteMeal} />
      </div>
    );
  }
});
