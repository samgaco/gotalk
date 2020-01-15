import React from "react"
import PropTypes from "prop-types"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";


class Scheduler extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date()
    };}



  CreateMeeting = (data) => {
    const url = "meetings/create";
    fetch(url, {
      method: 'post',
      body: JSON.stringify(data),
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
  }

  handleCreateMeeting = (data) =>{
      this.CreateMeeting(data);
      console.log(JSON.stringify(data))
  };

  SubmitMeeting = () =>{
    const newMeeting={
      scheduled: new Date(this.props.date).toISOString(),
      teacher_id: this.props.teacherId,
      user_id: this.props.current_user.id,
      length: 60
    }
    this.handleCreateMeeting(newMeeting);
  };
 
  render() {
    return (
      <div>
      <label>
      Email: <br/>
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
    <button onClick={this.SubmitMeeting} className="btn btn-blue">
      Send
      </button>
    </div>
    );
  }
}

export default Scheduler
