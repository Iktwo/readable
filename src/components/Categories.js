import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Categories extends Component {
    render() {
        return (
            <ul className="categories-list">
                {this.props.categories.map((category) => (<li key={category.name}>{category.name}</li>))}
            </ul>
        );
    }
}

Categories.propTypes = {
    categories: PropTypes.array.isRequired
};

export default Categories;
