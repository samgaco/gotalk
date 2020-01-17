/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
/* eslint-disable react/no-unused-state */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './styles/teachers.scss';


class Scheduler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
    };

    this.SubmitMeeting = this.SubmitMeeting.bind(this);
    this.handleCreateMeeting = this.handleCreateMeeting.bind(this);
    this.CreateMeeting = this.CreateMeeting.bind(this);
  }

  CreateMeeting(data) {
    const url = 'meetings/create';
    fetch(url, {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
  }

  handleCreateMeeting(data) {
    this.CreateMeeting(data);
  }

  SubmitMeeting() {
    const {date} = this.props;
    const newMeeting = {
      scheduled: new Date(date).toISOString(),
      teacher_id: this.props.teacherId,
      user_id: this.props.current_user.id,
      length: 60,
    };
    this.handleCreateMeeting(newMeeting);
    this.props.closeScheduler();
  }

  render() {
    return (
      <div className="shadow GoTalk-BgAndColor">
        <label>
      Email:
          {' '}
          <br />
          <input type="text" defaultValue={this.props.current_user.email} name="name" />
        </label>
        <DatePicker
          selected={this.props.date}
          onChange={this.props.handleDateChange}
          showTimeSelect
      // includeTimes={[
      //   setHours(setMinutes(new Date(), 0), 17),
      //   setHours(setMinutes(new Date(), 30), 18),
      //   setHours(setMinutes(new Date(), 30), 19),
      //   setHours(setMinutes(new Date(), 30), 17)
      // ]}
          dateFormat="MMMM Do yyyy, h:mm:ss a"
        />
        <button onClick={this.SubmitMeeting} className="btn contactButton">
      Send
        </button>
      </div>
    );
  }
}

export default Scheduler;
