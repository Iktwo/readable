import React, { Component } from 'react';
import HeaderNav from "../HeaderNav";
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import * as Actions from "../../actions";
import PostsForm from "../PostsForm";
import * as API from "../../utils/api";

class EditPostPage extends Component {
    submitForm = (data) => {
        const {id} = this.props.match.params;
        const {posts} = this.props;

        let post = posts.filter((p) => {
            return p.id === id
        });

        if (post.length) {
            post = post[0];
        } else {
            post = null;
        }

        if (post) {
            API.editPost(post.id, {
                title: data.title,
                body: data.body
            }).then((post) => {
                this.props.editPost(post);
                this.props.history.push(`/${post.category}/${post.id}`)
            }).catch((e) => {
                console.error("Error editing post: ", e)
            });
        }
    };

    render() {
        const {id} = this.props.match.params;
        const {categories, posts} = this.props;

        let post = posts.filter((p) => {
            return p.id === id
        });

        if (post.length === 1) {
            post = post[0];
        } else {
            post = null;
        }

        return (
            <div>
                <HeaderNav title="Editing post"/>

                {(post) ? (
                    <div className="container mt-2">
                        <PostsForm category={post.category} categories={categories}
                                   initialData={post}
                                   onSubmitForm={(data) => {
                                       this.submitForm(data)
                                   }}
                        />
                    </div>
                ) : (<div/>)}
            </div>
        );
    }
}

function mapStateToProps({posts, categories}) {
    return {
        posts: posts.posts,
        categories: categories.categories
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addPost: (post) => dispatch(Actions.addPost(post)),
        editPost: (post) => dispatch(Actions.editPost(post)),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditPostPage));
