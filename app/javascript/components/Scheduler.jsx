import React from "react"
import PropTypes from "prop-types"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";


class Scheduler extends React.Component {
  
  state = {
    startDate: new Date(),
  };

 
  handleChange = date => {
    this.setState({
      startDate: date
    });
  };
 
  render() {
    return (
      <form>
      <label>
      Email:
      <input type="text" defaultValue={this.props.current_user} name="name" />
    </label>
      <DatePicker
      selected={this.state.startDate}
      onChange={this.handleChange}
      showTimeSelect
      // includeTimes={[
      //   setHours(setMinutes(new Date(), 0), 17),
      //   setHours(setMinutes(new Date(), 30), 18),
      //   setHours(setMinutes(new Date(), 30), 19),
      //   setHours(setMinutes(new Date(), 30), 17)
      // ]}
      dateFormat="MMMM d, yyyy h:mm aa"
    />
    <input type="submit" value="Submit" />
    </form>
    );
  }
}

export default Scheduler
