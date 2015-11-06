import React from 'react';
import {Button} from 'react-bootstrap';


export default React.createClass({
  handleSubmit() {

    let data = {meal: {id: this.props.id}};
    this.props.deleteMeal(JSON.stringify(data));
  },
  render() {
    return (
      <div className='meal'>
        <form onSubmit={this.handleSubmit}>
          <span>
            <h4 className='inline' ref='name'>{this.props.name} </h4>
          </span>
          <span>calories:
            <h4 className='inline' ref='calories'>{this.props.calories} </h4>
          </span>
          <Button bsStyle='danger' bsSize='xs' type='submit'>
            delete
          </Button>
        </form>
      </div>
    );
  }
});
