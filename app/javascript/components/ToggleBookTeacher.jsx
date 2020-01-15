import React from "react";
import PropTypes from "prop-types";
import BookTeacherButton from "./BookTeacherButton";
import Scheduler from "./Scheduler";


class ToggleBookTeacher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.openScheduler = this.openScheduler.bind(this);
    this.closeScheduler = this.closeScheduler.bind(this);
  }


  openScheduler(){
        this.setState({isOpen: true})
  };

  closeScheduler(){
    this.setState({isOpen: false})
};

  render() {
    if (this.state.isOpen) {
      return <Scheduler 
      current_user={this.props.current_user}
      teacherId={this.props.teacherId}
      handleDateChange={this.props.handleDateChange}
      date={this.props.date}
      />;
    } else {
      return <BookTeacherButton 
      openScheduler={this.openScheduler}
      />;
    }
  }
}

export default ToggleBookTeacher;
