import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as Styles from "../utils/styles";
import * as Constants from "../utils/constants";

class SortOptions extends Component {
    render() {
        const {sortContent} = this.props;

        return (
            <div>
                <h6>Sort by:</h6>
                <a href="#score" className="badge badge-primary mr-2"
                   style={{...Styles.capitalize}}
                   onClick={
                       () => {
                           sortContent(Constants.SORT_BY_SCORE);
                           return false
                       }
                   }>{Constants.SORT_BY_SCORE}</a>
                <a href="#newest" className="badge badge-primary"
                   style={{...Styles.capitalize}}
                   onClick={
                       () => {
                           sortContent(Constants.SORT_BY_NEWEST);
                           return false
                       }
                   }>{Constants.SORT_BY_NEWEST}</a>
            </div>
        );
    }
}

SortOptions.propTypes = {
    sortContent: PropTypes.func.isRequired
};

export default SortOptions;


