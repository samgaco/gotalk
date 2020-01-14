import React from "react";
import { Link } from "react-router-dom";
import ToggleBookTeacher from "./ToggleBookTeacher";

class Teacher extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      teacher: { description: "" },
       isOpen: false      };

    this.addHtmlEntities = this.addHtmlEntities.bind(this);
  }

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
  }

  addHtmlEntities(str) {
    return String(str)
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">");
  }


  render() {
    const { teacher } = this.state;
    let teacherLanguages = `${teacher.language}`;

    // if (teacher.language.length > 0) {
    //     teacherLanguages = teacher.language
    //     .split(",")
    //     .map((language, index) => (
    //       <li key={index} className="list-group-item">
    //         {language}
    //       </li>
    //     ));
    // }
    const teacherDescription = this.addHtmlEntities(teacher.description);

    return (
      <div className="">
        <div className="hero position-relative d-flex align-items-center justify-content-center">
          {/* <img
            src={teacher.image}
            alt={`${teacher.name} image`}
            className="img-fluid position-absolute"
          /> */}
          <div className="overlay bg-dark position-absolute" />
          <h1 className="display-4 position-relative text-white">
            {teacher.name}
          </h1>
        </div>
        <div className="container py-5">
          <div className="row">
            <div className="col-sm-12 col-lg-3">
              <ul className="list-group">
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
                current_user={this.props.location.state.current_user} 
                teacherId={this.props.location.state.teacherId}
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