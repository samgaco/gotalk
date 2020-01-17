/* eslint-disable consistent-return */
/* eslint-disable func-names */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/no-access-state-in-setstate */
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import TeacherCard from './TeacherCard';
import Filter from './filter/index';
import Actions from '../actions';
import '../../assets/stylesheets/main.scss';

const mapStateToProps = function (state) {
  return {
    teachers: state.teachers,
    filter: state.filter,
    filterRate: state.filterRate,
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    filterTeachers: (filter) => {
      dispatch(Actions.changeFilter(filter));
    },
    filterRatesTeachers: (filter) => {
      dispatch(Actions.changeRateFilter(filter));
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
    };
    this.addLike = this.addLike.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.handleFilterRateChange = this.handleFilterRateChange.bind(this);
    this.mapTeachers = this.mapTeachers.bind(this);
    this.filterWrap = this.filterWrap.bind(this);
    this.orderTeachersByLikes = this.orderTeachersByLikes.bind(this);
  }

  componentDidMount() {
    const url = 'teachers/index';
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then((response) => this.setState({ teachers: response }))
      .catch(() => this.props.history.push('/'));


    const urlUser = 'users/index';
    fetch(urlUser)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then((response) => this.setState({ current_user: response }))
      .catch(() => this.props.history.push('/'));

    const urlLang = 'languages/index';
    fetch(urlLang)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then((response) => this.setState({ languages: response }))
      .catch(() => this.props.history.push('/'));
  }

  handleFilterChange(event) {
    event.preventDefault();
    this.props.filterTeachers(event.target.value);
  }

  handleFilterRateChange(event) {
    event.preventDefault();
    this.props.filterRatesTeachers(event.target.value);
  }

  addLike(teacherId) {
    this.setState({

      teachers: this.state.teachers.map((teacher) => {
        if (teacher.id === teacherId) {
          return { ...teacher, likes_count: teacher.likes_count + 1 };
        }
        return teacher;
      }),
    });
  }

  mapTeachers(teachers) {
    return teachers.map((teacher) => (
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

  allTeachers(filter) {
    const { teachers } = this.state;
    if (filter === '') {
      return teachers;
    }
    const teachersLanguage = teachers.filter((teacher) => teacher.language === filter);
    return teachersLanguage;
  }


  allTeachersRates(filterTeachers, filterRate) {
    if (filterRate === '') {
      return filterTeachers;
    } if (filterRate === 'Most expensive first') {
      const teachersLanguage = filterTeachers.sort((a, b) => b.rate - a.rate);
      return teachersLanguage;
    } if (filterRate === 'Less expensive first') {
      const teachersLanguage = filterTeachers.sort((a, b) => a.rate - b.rate);
      return teachersLanguage;
    }
  }

  orderTeachersByLikes(filterTeachers) {
    const teachersLanguage = filterTeachers.sort((a, b) => b.likes_count - a.likes_count);
    return teachersLanguage;
  }

  filterWrap() {
    const languageFilter = this.allTeachers(this.props.filter);
    const rateFilter = this.allTeachersRates(languageFilter, this.props.filterRate);
    const orderbyLikes = this.orderTeachersByLikes(rateFilter);
    return orderbyLikes;
  }

  render() {
    const { teachers } = this.state;

    const noTeachers = (
      <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
        <h4>
              No teachers yet. Why not
          {' '}
          <Link to="/new_teacher">join as a teacher</Link>
        </h4>

      </div>
    );

    return (
      <>
        <section className="GoTalk-BgAndColor jumbotron jumbotron-fluid text-center">
          <div className="container py-5">
            <h1 className="useFont display-4">GoTalk!</h1>
            <p className="lead text-muted">
                    You are logged as
              {' '}
              {this.state.current_user.email}
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
              handleFilterRateChange={this.handleFilterRateChange}
            />

            <div className="text-right mb-3">

              <Link
                to={{
                  pathname: '/meetings',
                  state: { meetings: this.state.current_user.meetings },
                }}
                className="btn custom-button"
              >
            Upcoming lessons
              </Link>
            </div>

            <div className="text-right mb-3">

              <Link to="/new_teacher" className="btn custom-button">
                      Join as a teacher
              </Link>
            </div>
            <div className="row">
              {teachers.length > 0 ? this.mapTeachers(this.filterWrap()) : noTeachers}
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
