/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/prop-types */
/* eslint-disable class-methods-use-this */
import React from 'react';
import { Link } from 'react-router-dom';
import ToggleBookTeacher from './Scheduler/ToggleBookTeacher';


class Teacher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current_user: [],
      teacher: [],
      startDate: new Date(),
    };


    this.addHtmlEntities = this.addHtmlEntities.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
  }

  componentDidMount() {
    const {
      match: {
        params: { id },
      },
    } = this.props;

    const url = `/teachers/${id}`;

    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then((response) => this.setState({ teacher: response }))
      .catch(() => this.props.history.push('/teachers'));

    const urlUser = '/users/index';
    fetch(urlUser)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then((response) => this.setState({ current_user: response }));
  }

  addHtmlEntities(str) {
    return String(str)
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>');
  }

  handleDateChange(event) {
    console.log(event)


    this.setState({
      startDate: event,
    });
    console.log("last", this.state.startDate)
  }


  render() {
    const { teacher } = this.state;
    const teacherLanguages = `${teacher.language}`;
    const teacherDescription = this.addHtmlEntities(teacher.description);

    return (
      <div>

        <div className="teacherImage-bg d-flex flex-row flex-wrap justify-content-center">

          <div className="teacherpage-upper-in">
          <div className="teacherpage-uppart d-flex justify-content-center">
            <h1 className="teacherpage-textup">{teacher.name}</h1>
          </div>
          <div className="teacherpage-uppart d-flex justify-content-center">

            <img
              src={teacher.image}
              alt={`${teacher.name} image`}
              className="image-teacher rounded-circle teacherpage-uppart"
            />
          </div>

          <div className="teacherpage-uppart d-flex justify-content-center">
            <h5 className="teacherpage-textup">{teacherLanguages} Language Teacher</h5>
          </div>

        </div>
      </div>

      <div className="teacherpage-info d-flex justify-content-center">
        <h3>Teacher Info</h3>
      </div>


      <h5 className="mb-2 teacherpage-descriptiontext"> { teacherDescription }:</h5>

    <div className="d-flex justify-content-center">
      <ToggleBookTeacher
        current_user={this.state.current_user}
        teacherId={teacher.id}
        handleDateChange={this.handleDateChange}
        date={this.state.startDate}
      />
    </div>
      <Link to="/teachers" className="btn btn-link">
        Back to teachers
          </Link>

          </div >
    );
  }
}

export default Teacher;
