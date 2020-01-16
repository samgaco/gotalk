import React from 'react';
import PropTypes from 'prop-types';
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
