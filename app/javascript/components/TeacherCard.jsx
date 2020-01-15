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
<div className="useFont col-md-6 col-lg-4">
      <div className="card mb-4 shadow">
        <div className="card-body">
          <h5 className="card-title font-weight-bold">{this.props.name}</h5>
          <p className="card-text useFont">Teaching: {this.props.language}</p>
          <div className='d-flex flex-row justify-content-around'>
          <p className="font-weight-bold card-text">{this.props.rate}$</p>
          <p className="font-weight-bold card-text">{this.props.lessons} Lessons given</p>
          <div>
          <FontAwesomeIcon className='font-weight-bold like' onClick={this.handleLike} icon={faHeart} />
          {' '+ this.props.likes}
          </div>
          </div>

          
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
