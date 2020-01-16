import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../styles/teachers.scss';


class Index extends React.Component {
  render() {
    return (

      <section className="GoTalk-BgAndColor jumbotron jumbotron-fluid text-center">
        <div className="container py-5">
          <h1 className="display-4">GoTalk!</h1>
          <h5 className="mb-2">You'll be able to submit teacher applications soon!</h5>

          <Link to="/teachers" className="btn btn-link">
            Back to teachers
          </Link>
        </div>
      </section>
    );
  }
}

export default Index;
