import React from 'react';


export default React.createClass({
  render() {
    return (
      <div>
        <span>
          <h4 className='inline' ref='name'>{this.props.name} </h4>
        </span>
        <span>calories:
          <h4 className='inline' ref='calories'>{this.props.calories} </h4>
        </span>
      </div>
    );
  }
});
