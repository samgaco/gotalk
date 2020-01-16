/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import './styles/teachers.scss';

class BookTeacherButton extends React.Component {
  render() {
    return (
      <button onClick={this.props.openScheduler} type="button" className="btn contactButton">
      Book a class
      </button>
    );
  }
}

export default BookTeacherButton;
