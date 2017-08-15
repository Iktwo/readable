import React, {Component} from 'react';
import './App.css';
import * as API from '../utils/api';
import {connect} from 'react-redux'
import * as Actions from '../actions';
import {Route, Redirect} from 'react-router-dom';
import MainPage from "./MainPage";
import CategoryPage from "./CategoryPage";

class App extends Component {
    componentDidMount() {
        API.fetchCategories().then((categories) => {
            this.props.updateCategories(categories);
        });

        API.fetchPosts().then((posts) => {
            this.props.updatePosts(posts);
        });
    }

    render() {
        return (
            <div className="App">
                <Route
                    exact path="/r" render={() => (
                    <Redirect to="/"/>
                )}
                />

                <Route
                    exact path="/r/:category/:something" render={() => (
                    <Redirect to="/"/>
                )}
                />

                <Route
                    exact path="/r/:category" render={() => (
                    <CategoryPage posts={this.props.posts}/>
                )}
                />

                <Route
                    exact path="/" render={() => (
                    <MainPage categories={this.props.categories} posts={this.props.posts}/>
                )}
                />
            </div>
        );
    }
}

function mapStateToProps({categories, posts}) {
    return {
        categories: categories.categories,
        posts: posts.posts
    }
}

function mapDispatchToProps(dispatch) {
    return {
        updateCategories: (data) => dispatch(Actions.updateCategories(data)),
        updatePosts: (data) => dispatch(Actions.updatePosts(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
