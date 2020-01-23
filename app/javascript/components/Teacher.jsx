/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/prop-types */
/* eslint-disable class-methods-use-this */
import React from 'react';
import { Link } from 'react-router-dom';
import ToggleBookTeacher from './ToggleBookTeacher';


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
      <div className="teacherFull">
        <div className="hero position-relative d-flex align-items-center justify-content-center">
          <img
            src={teacher.image}
            alt={`${teacher.name} image`}
            className="img-fluid position-absolute"
          />
          <div className="overlay bg-dark position-absolute" />

        </div>
        <div className="teacherBody container py-5">
          <div className="row">
            <div className="col-sm-12 col-lg-3">
              <ul className="list-group">
                <h1>
                  {teacher.name}
                </h1>
                <h5 className="mb-2">Languages:</h5>
                {teacherLanguages}
              </ul>
            </div>
            <div className="mb-2 col-sm-12 col-lg-7">
              <h5 className="mb-2">Description:</h5>
              { teacherDescription }
            </div>
            <div className="col-sm-12 col-lg-3">
              <ToggleBookTeacher
                current_user={this.state.current_user}
                teacherId={teacher.id}
                handleDateChange={this.handleDateChange}
                date={this.state.startDate}
              />
            </div>
          </div>
          <Link to="/teachers" className="btn btn-link">
            Back to teachers
          </Link>
        </div>
      </div>
    );
  }
}

export default Teacher;
