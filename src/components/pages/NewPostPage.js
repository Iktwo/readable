import React, { Component } from 'react';
import HeaderNav from "../HeaderNav";
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import * as Actions from "../../actions";
import PostsForm from "../PostsForm";
import * as API from "../../utils/api";
import * as UUIDV1 from 'uuid/v1';

class NewPostPage extends Component {
    submitForm = (data) => {
        /// TODO: add some error handling
        API.addPost({
            id: UUIDV1(),
            timestamp: new Date().getTime(),
            title: data.title,
            body: data.body,
            author: data.author,
            category: data.category
        }).then((post) => {
            this.props.addPost(post);
            this.props.history.push(`/post/${post.id}`)
        });
    };

    constructor(props) {
        super(props);
    }

    render() {
        const {category} = this.props.match.params;
        const {categories} = this.props;

        return (
            <div>
                <HeaderNav
                    title={category && category !== '' ? `New post for ${category}` : `New post`}/>
                <div className="container mt-2">
                    <PostsForm category={category} categories={categories}
                               onSubmitForm={this.submitForm}
                    />
                </div>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addPost: (post) => dispatch(Actions.addPost(post))
    }
}

export default withRouter(connect(null, mapDispatchToProps)(NewPostPage));
