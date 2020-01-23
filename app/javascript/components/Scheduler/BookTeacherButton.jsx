/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';

class BookTeacherButton extends React.Component {
  render() {
    return (
      <button onClick={this.props.openScheduler} type="button" className="btn teacherpage-contactButton">
      Book a class
      </button>
    );
  }
}

export default BookTeacherButton;
