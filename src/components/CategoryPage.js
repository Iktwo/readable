import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Posts from "./Posts";
import {withRouter} from 'react-router-dom';

const CategoryPageWithRouter = withRouter(props => <CategoryPage {...props}/>);

class CategoryPage extends Component {
    render() {
        return (
            <div>
                <h1>Category</h1>
                <Posts posts={this.props.posts}/>
            </div>
        );
    }
}

CategoryPage.propTypes = {
    posts: PropTypes.array.isRequired
};

export default CategoryPageWithRouter;


