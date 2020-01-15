import React from "react"
import PropTypes from "prop-types"
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import './styles/teachers.scss'


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
          <FontAwesomeIcon className='like' onClick={this.handleLike} icon={faHeart} />
          {''+ this.props.likes}
          <p className="card-text">Teaching: {this.props.language}</p>
          <p className="card-text">Rate: {this.props.rate}$</p>
          <p className="card-text">Lessons: {this.props.lessons}</p>

          
          <Link to={{
            pathname: `/teachers/${this.props.id}`,
            state:{
              current_user: this.props.current_user,
              teacherId: this.props.id            }
            }} 
            className="contactButton btn custom-button">
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
