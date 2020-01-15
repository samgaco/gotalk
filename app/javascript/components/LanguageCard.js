import React from "react"
import PropTypes from "prop-types"
import './styles/teachers.scss'

class LanguageCard extends React.Component {
  render () {
    return (
      <div className="GoTalk-BgAndColor col-sm-12 col-lg-6">
          {this.props.language}
        </div>
    );
  }
}

export default LanguageCard
