/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Link } from 'react-router-dom';
import LanguageCard from './LanguageCard';
import hide from '../helpers/helper';
import { Slide } from '@material-ui/core';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      languages: [],
    };
  }

  componentDidMount() {
    hide;
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


  render() {
    const DisplayLanguages = this.state.languages.map((language, index) => (
      <Slide direction="up" in={true} mountOnEnter unmountOnExit>
      <LanguageCard
        key={index}
        language={language}
      />
      </Slide>
    ));

    return (
      <div className="primary-color d-flex align-items-center justify-content-center">
        <div className="jumbotron jumbotron-fluid bg-transparent">
          <div className="container secondary-color">
            <h1 className="useFont display-4">GoTalk!</h1>
            <h2 className="useFont display-4">Search Teachers:</h2>
            <p className="lead">
      Search by directly typing the languages you want to learn and rates.
            </p>
            <hr className="my-4" />
            <Link
              to="/teachers"
              className="btn btn-lg custom-button"
              role="button"
            >
          View Teachers
            </Link>
          </div>

          <div className="language-card-list justify-content-center d-flex flex-row flex-wrap">
            {DisplayLanguages}
          </div>
        </div>

      </div>

    );
  }
}

export default Home;
