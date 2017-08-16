import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Posts from "./Posts";
import { withRouter } from 'react-router-dom';
import HeaderNav from "./HeaderNav";
import { connect } from 'react-redux';

const CategoryPageWithRouter = withRouter(props => <CategoryPage {...props}/>);

class CategoryPage extends Component {
    render() {
        const {category} = this.props.match.params;

        return (
            <div>
                <HeaderNav title={category} menus={[{name: 'add', path: '/'}]}/>
                <div className="container">
                    <Posts posts={this.props.posts.filter((post) => {
                        return post.category === category
                    })}/>
                </div>
            </div>
        );
    }
}

function mapStateToProps({posts}) {
    return {
        posts: posts.posts
    }
}


CategoryPage.propTypes = {
    posts: PropTypes.array.isRequired
};

export default connect(mapStateToProps, null)(CategoryPageWithRouter);
// TODO: Fix add link