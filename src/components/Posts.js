import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Posts extends Component {
    static filterPosts(posts, displayDeleted) {
        if (!displayDeleted) {
            return posts.filter((post) => (!post.deleted));
        } else {
            return posts;
        }
    }

    render() {

        let a = new Array(5)
        return (
            <div className="collection">
                {
                    Posts.filterPosts(this.props.posts, this.props.displayDeleted || false).map((post) => (

                        <div key={post.id} className="collection-item">

                            <div className="row valign-wrapper">
                                <div className="col s4 m2">
                                    <a className="s12" href="#!"><i
                                        className="material-icons blue-grey-text text-lighten-1">arrow_drop_up</i></a>
                                    <p className="s12">{post.voteScore}</p>
                                    <a className="s12" href="#!"><i
                                        className="material-icons blue-grey-text text-lighten-1">arrow_drop_down</i></a>
                                </div>

                                <img src="http://via.placeholder.com/150x150" alt=""
                                     className="col m2 hide-on-small-only circle"
                                     style={{width: 64, height: 64, padding: 5}}/>

                                <div className="col s8">
                                    <h5>
                                        <a className={`row truncate left-align blue-grey-text text-lighten-1`}
                                           href="#!">
                                            {post.title}
                                        </a>
                                    </h5>
                                    <h6 className="row truncate left-align">

                                        {
                                            new Array(5).map((e) => {
                                                return (<a href="#!">post.author</a>)
                                            })
                                        }


                                    </h6>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        );
    }
}

Posts.propTypes = {
    posts: PropTypes.array.isRequired,
    displayDeleted: PropTypes.bool,
    displayCategory: PropTypes.bool
};

export default Posts;
