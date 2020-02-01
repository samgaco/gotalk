/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';


class MeetingCard extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="col-12 givemargin">
        <div className="card mb-8 shadow">
          <div className="card-body">
            {this.props.likes}
            <p className="card-text font-weight-bold">
              {this.props.language}
              {' '}
lesson booked with
              {' '}
              {this.props.teacher}
            </p>
            <p className="card-text">
Duration of the lesson:
              {this.props.duration}
              {' '}
minutes
            </p>
            <p className="card-text">
Scheduled for:
              {this.props.time}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default MeetingCard;
