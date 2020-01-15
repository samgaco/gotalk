import React from "react"
import PropTypes from "prop-types"
class LanguageCard extends React.Component {
  render () {
    return (
      <div className="col-sm-12 col-lg-6 bg-success">
          {this.props.language}
        </div>
    );
  }
}

export default LanguageCard
