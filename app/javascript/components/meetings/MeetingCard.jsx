import React from "react"
import PropTypes from "prop-types"
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

class MeetingCard extends React.Component {
  constructor(props) {
    super(props);
  }


  render () {
    return (
      <div className="col-md-6 col-lg-12">
      <div className="card mb-8">
        <div className="card-body">
          {this.props.likes}
          <p className="card-text">Scheduled for: {this.props.time}</p>
          <p className="card-text">Duration of the lesson: {this.props.duration} minutes</p>
        </div>
      </div>
    </div>
    );
  }
}

export default MeetingCard;