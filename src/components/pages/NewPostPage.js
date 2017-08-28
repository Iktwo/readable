import React, { Component } from 'react';
import HeaderNav from "../HeaderNav";
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import * as Actions from "../../actions";
import PostsForm from "../PostsForm";
import * as API from "../../utils/api";
import * as UUIDV1 from 'uuid/v1';

class NewPostPage extends Component {
    submitForm = (e) => {
        e.preventDefault();

        /// TODO: add some error handling
        API.addPost({
            id: UUIDV1(),
            timestamp: new Date().getTime(),
            title: this.title.value,
            content: this.content.value,
            author: this.author.value || 'Anon',
            category: this.category.value
        }).then((post) => {
            this.props.addPost(post);
            this.props.postFormRedirect(true);
        });
    };

    constructor(props) {
        super(props);

        this.props.postFormRedirect(false);
    }

    render() {
        const {category} = this.props.match.params;
        const {categories} = this.props;

        return (
            <div>
                <HeaderNav
                    title={category && category !== '' ? `New post for ${category}` : `New post`}/>
                <div className="container mt-2">
                    {
                        (this.props.redirectPostsForm) ?
                            (<div>
                                    <span>Your post was added.</span>
                                    <br/>
                                    <a className="btn btn-primary" href="/">Finish</a>
                                </div>
                            ) :
                            (<PostsForm category={category} categories={categories}
                                        onSubmitForm={(e) => {
                                            this.submitForm(e)
                                        }}/>)
                    }
                </div>
            </div>
        );
    }
}

function mapStateToProps({posts}) {
    return {
        redirectPostsForm: posts.redirectPostsForm
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addPost: (post) => dispatch(Actions.addPost(post)),
        postFormRedirect: (enabled) => dispatch(Actions.postFormRedirect(enabled))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewPostPage));
