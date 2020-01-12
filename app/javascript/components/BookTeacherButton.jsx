import React from "react"
import PropTypes from "prop-types"
class BookTeacherButton extends React.Component {
  render () {
    return (
      <button onClick={this.props.openScheduler} type="button" className="btn btn-danger">
      Book a class
      </button>
    );
  }
}

export default BookTeacherButton
