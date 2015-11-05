import React from 'react';
import FoodList from './FoodList';

export default React.createClass({
  componentDidMount() {
    this.readFoodsFromAPI()
  },
  readFoodsFromAPI() {
    this.props.readFromAPI(this.props.origin + '/foods', (foods) => {

      this.setState({data: foods})

    })
  },
  render() {
    return <div>
      <h3>foods</h3>
      <input type='text' placeholder='Search for a food:' className='form-control'/>
      
    </div>;
  }
});
