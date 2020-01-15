import React from "react";
import { Link } from "react-router-dom";
import ToggleBookTeacher from "./ToggleBookTeacher";

class Teacher extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      teacher: { description: "" },
       isOpen: false ,
       current_user: [] ,
       teacher:[],
       startDate: new Date()
       };


    this.addHtmlEntities = this.addHtmlEntities.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
  }

  handleDateChange = event => {
    this.setState({
      startDate: event
    });
  };
  
  componentDidMount() {
    const {
      match: {
        params: { id }
      }
    } = this.props;

    const url = `/show/${id}`;

    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(response => this.setState({ teacher: response }))
      .catch(() => this.props.history.push("/teachers"));

      const url_user = "/users/index";
      fetch(url_user)
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("Network response was not ok.");
        })
        .then(response => this.setState({ current_user: response }))
  }

  addHtmlEntities(str) {
    return String(str)
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">");
  }


  render() {
    const { teacher } = this.state;
    let teacherLanguages = `${teacher.language}`;
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
            <div className="col-sm-12 col-lg-7">
              <h5 className="mb-2">Description:</h5>
              <div
                dangerouslySetInnerHTML={{
                  __html: `${teacherDescription}`
                }}
              />
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