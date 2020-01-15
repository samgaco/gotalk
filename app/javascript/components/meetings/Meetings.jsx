import React from "react";
import { Link } from "react-router-dom";
import MeetingCard from "./MeetingCard";
import { connect } from 'react-redux';
import '../styles/teachers.scss'


class Meetings extends React.Component {

    render() {
        const { meetings } = this.props.location.state;
        const allMeetings = meetings.map((meeting, index) => (
          <MeetingCard
            key={meeting.id}
            time={meeting.scheduled}
            duration={meeting.length}
            id={meeting.id}
          />
        ));
        const noMeetings = (
          <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">  

            <h4>
              No lessons yet. Why not <Link to="/teachers">Book one</Link>
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