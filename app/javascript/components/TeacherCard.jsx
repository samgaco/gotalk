import React from "react"
import PropTypes from "prop-types"
import {Link} from 'react-router-dom';

class TeacherCard extends React.Component {
  render () {
    return (
      <div className="col-md-6 col-lg-4">
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">{this.props.name}</h5>
          <p className="card-text">Teaching: {this.props.language}</p>
          <p className="card-text">Rate: {this.props.rate}$</p>
          <Link to={`/teachers/${this.props.id}`} className="btn custom-button">
            Contact teacher
          </Link>
        </div>
      </div>
    </div>
    );
  }
}

TeacherCard.propTypes = {
  name: PropTypes.string,
  rate: PropTypes.node,
  id: PropTypes.node
};
export default TeacherCard
