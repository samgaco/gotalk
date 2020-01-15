import * as React from 'react'
import classnames from 'classnames'

import styles from './styles.module.css'


class Filter extends React.Component {
    constructor(props) {
        super(props);
      }
  


    render() {
        const CATEGORIES = this.props.languages
        const options = CATEGORIES.map(category => <option key={category}>{category}</option>);
        const containerClasses = classnames('container', 'mb-1', styles.container)
        const formClasses = classnames('form-horizontal', styles.form)

        return (
            <div className={containerClasses}>
                <form className={formClasses} noValidate>
                    <p className="mb-1">Refine your results</p>
                    <div className="columns text-center">
                        <div className="column col-4 col-xs-12">

                        </div>
                        <div className="column col-4 col-xs-12">
                            <div className="form-group">
                                <div className="col-3 col-sm-12">
                                    <label className="form-label" htmlFor="language">
                                        Language
                  </label>
                                </div>
                                <div className="col-9 col-sm-12">
                                    <select className="form-select" id="language" onChange={this.props.handleFilterChange}>
                                        <option value="">All</option>

                                        {options}

                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="column col-4 col-xs-12">
                            <div className="form-group">
                                <div className="col-3 col-sm-12">
                                    <label className="form-label" htmlFor="sortorder">
                                        Sort Order by rates
                  </label>
                                </div>
                                <div className="col-9 col-sm-12">
                                    <select className="form-select" id="sortorder" onChange={this.props.handleFilterRateChange}>
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
        )
    }
}

export default Filter