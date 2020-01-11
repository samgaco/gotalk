import React from "react"
import PropTypes from "prop-types"
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

class TeacherCard extends React.Component {
  constructor(props) {
    super(props);

    this.handleLike = this.handleLike.bind(this)
  }


  handleLike(){
    this.props.addLike(this.props.id);
  };
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
          <FontAwesomeIcon onClick={this.handleLike} icon={faHeart} />
          {this.props.likes}
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
