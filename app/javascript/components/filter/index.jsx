/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prefer-stateless-function */
import * as React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import classnames from 'classnames';
import '../styles/teachers.scss';

class Filter extends React.Component {
  render() {
    const { languages } = this.props;
    const options = languages.map((category) => <option key={category}>{category}</option>);
    const containerClasses = classnames('container', 'GoTalk-BgAndColor', 'shadow');
    const formClasses = classnames('form-horizontal', 'GoTalk-BgAndColor');
    const { handleFilterChange, handleFilterRateChange } = this.props;
    return (
      <div className={containerClasses}>
        <form className={formClasses} noValidate>
          <p className="mb-1">Refine your results</p>
          <div className="d-flex flex-row flex-wrap text-center justify-content-lg-center">

            <div className="column col-lg-3  col-sm-12">
              <div className="form-group">
                <div className="col-3 col-sm-12">
                  <label className="form-label" htmlFor="language">
                                        Language
                  </label>
                </div>
                <div className="col-9 col-sm-12">
                  <select className="form-select" id="language" onChange={handleFilterChange}>
                    <option value="">All</option>

                    {languages? options:console.log("I want fufu")}

                  </select>
                </div>
              </div>
            </div>
            <div className="column col-lg-3 col-sm-12">
              <div className="form-group">
                <div className="col-3 col-sm-12">
                  <label className="form-label" htmlFor="sortorder">
                                        Sort Order by rates
                  </label>
                </div>
                <div className="col-9 col-sm-12">
                  <select className="form-select" id="sortorder" onChange={handleFilterRateChange}>
                    <option value="">Order by...</option>
                    <option key={1}>Most expensive first</option>
                    <option key={2}>Less expensive first</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Filter;
