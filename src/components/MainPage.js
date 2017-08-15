import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Posts from "./Posts";
import Categories from "./Categories";

class MainPage extends Component {
    render() {
        return (
            <div className="container">
                <h1>Readable</h1>
                <Categories categories={this.props.categories}/>
                <Posts posts={this.props.posts}/>
            </div>
        );
    }
}

MainPage.propTypes = {
    categories: PropTypes.array.isRequired,
    posts: PropTypes.array.isRequired
};

export default MainPage;


