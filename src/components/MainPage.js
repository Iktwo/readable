import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Posts from "./Posts";
import Categories from "./Categories";

class MainPage extends Component {
    render() {
        return (
            <div className="container">
                <img src="/logo.svg" className="mx-auto mb-2" alt="logo" style={{display: 'block', width: 64}}/>
                <Categories categories={this.props.categories}/>
                <Posts posts={this.props.posts} displayCategory={true}/>
            </div>
        );
    }
}

MainPage.propTypes = {
    categories: PropTypes.array.isRequired,
    posts: PropTypes.array.isRequired
};

export default MainPage;
