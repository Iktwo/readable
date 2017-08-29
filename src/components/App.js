import React, { Component } from 'react';
import * as API from '../utils/api';
import { connect } from 'react-redux'
import * as Actions from '../actions';
import { Redirect, Route, Switch } from 'react-router-dom';
import MainPage from "./pages/MainPage";
import CategoryPage from "./pages/CategoryPage";
import NewPostPage from "./pages/NewPostPage";
import NotFoundPage from "./pages/NotFoundPage";
import PostPage from "./pages/PostPage";
import EditPostPage from "./pages/EditPostPage";
import EditCommentPage from './pages/EditCommentPage';

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
                <Switch>
                    <Route exact path="/" component={() => (
                        <MainPage categories={this.props.categories} posts={this.props.posts}/>
                    )}
                    />

                    <Route exact path="/r" render={() => (
                        <Redirect to="/"/>
                    )}
                    />

                    <Route exact path="/r/:category" render={() => (
                        <CategoryPage posts={this.props.posts}/>
                    )}
                    />

                    <Route exact path="/post/:id" component={() => (
                        <PostPage/>
                    )}
                    />

                    <Route exact path="/editpost/:id" component={() => (
                        <EditPostPage/>
                    )}
                    />

                    <Route exact path="/editcomment/:id" component={() => (
                        <EditCommentPage/>
                    )}
                    />

                    <Route exact path="/newpost/" render={() => (
                        <NewPostPage categories={this.props.categories}/>
                    )}
                    />

                    <Route exact path="/newpost/:category" render={(props) => (
                        <NewPostPage categories={this.props.categories} location={props.location}/>
                    )}
                    />

                    <Route component={NotFoundPage}/>

                </Switch>
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
