/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import './styles/teachers.scss';


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
