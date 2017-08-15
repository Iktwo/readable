import React, { Component } from 'react';
import './App.css';
import * as API from '../utils/api';
import { connect } from 'react-redux'
import * as Actions from '../actions';
import Categories from './Categories';
import Posts from './Posts';

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
                <h1>Readable</h1>
                <Categories categories={this.props.categories}/>
                <Posts posts={this.props.posts}/>
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

function mapDispatchToProps (dispatch) {
    return {
        updateCategories: (data) => dispatch(Actions.updateCategories(data)),
        updatePosts: (data) => dispatch(Actions.updatePosts(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
