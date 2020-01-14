import React from "react";
import { Link } from "react-router-dom";
import TeacherCard from "./TeacherCard";
import Filter from "./filter/index";
import { connect } from 'react-redux';
import Actions from '../actions';


const mapStateToProps = function (state) {
  return {
    teachers: state.teachers,
    filter: state.filter,
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    filterTeachers: (filter) => {
      dispatch(Actions.changeFilter(filter));
    },
  };
};


class Teachers extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        teachers: [],
        current_user: [],
        languages: [],
        meetings: [],
        filter: 'all'

      };
      this.addLike = this.addLike.bind(this)
      this.handleFilterChange = this.handleFilterChange.bind(this);


    }

    handleFilterChange(event) {
      event.preventDefault();
      this.props.filterTeachers(event.target.value);
    }  

    componentDidMount() {

        const url = "teachers/index";
        fetch(url)
          .then(response => {
            if (response.ok) {
              return response.json();
            }
            throw new Error("Network response was not ok.");
          })
          .then(response => this.setState({ teachers: response }))
          .catch(() => this.props.history.push("/"));


          const url_user = "users/index";
          fetch(url_user)
            .then(response => {
              if (response.ok) {
                return response.json();
              }
              throw new Error("Network response was not ok.");
            })
            .then(response => this.setState({ current_user: response }))
            .catch(() => this.props.history.push("/"));

            const url_lang = "languages/index";
            fetch(url_lang)
              .then(response => {
                if (response.ok) {
                  return response.json();
                }
                throw new Error("Network response was not ok.");
              })
              .then(response => this.setState({ languages: response }))
              .catch(() => this.props.history.push("/"));
    }

    addLike(teacherId){
      this.setState({

        teachers: this.state.teachers.map((teacher)=>{
          if(teacher.id === teacherId){
              return Object.assign({}, teacher, {
                likes_count: teacher.likes_count + 1
              });

          }else{
            return teacher;
          }
        }),
      });

    };

    allTeachers(filter) {
      if (filter === 'All') {
        return this.state.teachers.map((teacher, index) => (
          <TeacherCard
            key={teacher.id}
            name={teacher.name}
            language={teacher.language}
            rate={teacher.rate}
            likes={teacher.likes_count}
            lessons={teacher.lessons}
            id={teacher.id}
            addLike={this.addLike}
            current_user={this.state.current_user}
        /> ));
      }else{
      const teachersLanguage = this.state.teachers.filter(teacher => teacher.language === filter);
      return teachersLanguage.map((teacher, index) => (
        <TeacherCard
          key={teacher.id}
          name={teacher.name}
          language={teacher.language}
          rate={teacher.rate}
          likes={teacher.likes_count}
          lessons={teacher.lessons}
          id={teacher.id}
          addLike={this.addLike}
          current_user={this.state.current_user}
      />
       ));
      }
    }



    render() {
        const {teachers} = this.state

        const noTeachers = (
          <div className="vw-100 vh-50 d-flex align-items-center justify-content-center"> 
           <Filter languages={this.state.languages}/>

            <h4>
              No teachers yet. Why not <Link to="/new_teacher">join as a teacher</Link>
            </h4>
          </div>
        );

        return (
            <>
              <section className="jumbotron jumbotron-fluid text-center">
                <div className="container py-5">
                  <h1 className="display-4">Teachers</h1>
                  <p className="lead text-muted">
                    You are logged as {this.state.current_user.email}
                  </p>
                  <p className="lead text-muted">
                    Some of the available teachers
                  </p>
                </div>
              </section>
              <div className="py-5">
                <main className="container">
                <Filter 
                languages={this.state.languages}
                teachers={teachers}
                handleFilterChange={this.handleFilterChange}
                />

<div className="text-right mb-3">
          
          <Link to={{
            pathname: "/meetings",
            state: {meetings: this.state.current_user.meetings}}
          } 
            className="btn custom-button">
            Upcoming lessons
          </Link>
        </div>

                  <div className="text-right mb-3">
          
                    <Link to="/new_teacher" className="btn custom-button">
                      Join as a teacher
                    </Link>
                  </div>
                  <div className="row">
                    {teachers.length > 0 ? this.allTeachers(this.props.filter) : noTeachers}
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

  export default connect(mapStateToProps, mapDispatchToProps)(Teachers);

