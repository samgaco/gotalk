import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import MeetingCard from './MeetingCard';
import Teachers from '../Teachers';
import { Slide } from '@material-ui/core';


class Meetings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      meetings: [],
    };
  }

  componentDidMount() {
    const url = '/meetings/index';
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then((response) => this.setState({ meetings: response }))
      .catch(() => this.props.history.push('/'));
  }

  render() {
    const { meetings } = this.state;
    const allMeetings = meetings.map((meeting, index) => (
      <Slide direction="up" in={true} mountOnEnter unmountOnExit>
      <MeetingCard
        key={meeting.id}
        time={meeting.scheduled}
        duration={meeting.length}
        id={meeting.id}
        teacher={meeting.teacher.name}
        language={meeting.teacher.language}
      />
      </Slide>
    ));
    const noMeetings = (
      <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">

        <h4>
              No lessons yet. Why not
          {' '}
          <Link to="/teachers">Book one</Link>
        </h4>
      </div>
    );

    return (
      <>
        <section className="GoTalk-BgAndColor jumbotron jumbotron-fluid text-center">
          <div className="container py-5">
            <h1 className="display-4 useFont">Upcoming Lessons</h1>

          </div>
        </section>
        <div className="py-5">
          <main className="container">


            <div className="text-right mb-3">

              <Link to="/teachers" className="btn custom-button">
                      Book a new lesson
              </Link>
            </div>
            <div className="row">
              {meetings.length > 0 ? allMeetings : noMeetings}
            </div>
            <Link to="/" className="btn btn-link">
                    Home
            </Link>
          </main>
        </div>
      </>
    );
  }
}

export default Meetings;
