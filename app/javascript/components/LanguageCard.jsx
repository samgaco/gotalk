import React from 'react';
import PropTypes from 'prop-types';
import './styles/teachers.scss';
import { Link } from 'react-router-dom';

class LanguageCard extends React.Component {
  render() {
    return (
      <div className="language-card GoTalk-BgAndColor col-sm-5 col-lg-2 shadow givemargin text-center font-weight-bold">
        {this.props.language}
      </div>

    );
  }
}

export default LanguageCard;
