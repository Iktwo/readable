import React, { Component } from 'react';
import HeaderNav from "../HeaderNav";
import { connect } from 'react-redux';
import { Redirect, withRouter } from "react-router-dom";
import * as Actions from "../../actions";
import * as API from "../../utils/api";
import * as UUIDV1 from 'uuid/v1';

class EditPostPage extends Component {
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
        // this.props.history.push("/post/1");
    };

    constructor(props) {
        super(props);

        this.props.postFormRedirect(false);
    }

    render() {
        // console.log("THIS PROPS", this.props)
        const {category} = this.props.match.params;
        const {categories} = this.props;

        return (
            <div>
                {
                    (this.props.redirectPostsForm) ?
                        (<Redirect to={'/post/1'}/>) :
                        (<div>
                            <HeaderNav
                                title={category && category !== '' ? `New post for ${category}` : `New post`}/>
                            <div className="container mt-2">
                                <form onSubmit={(e) => {
                                    this.submitForm(e)
                                }}>
                                    <div className="form-group">
                                        <label htmlFor="title">Title</label>
                                        <input type="text" className="form-control" id="title" placeholder="Title"
                                               required
                                               ref={(title) => this.title = title}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="body">Content</label>
                                        <textarea type="text" className="form-control" id="body"
                                                  placeholder="Content" rows={3}
                                                  required
                                                  ref={(content) => this.content = content}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="author">Author</label>
                                        <input type="text" className="form-control" id="author" placeholder="Author"
                                               ref={(author) => this.author = author}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="category">Category</label>
                                        <select className="form-control" id="category"
                                                ref={(category) => this.category = category}>
                                            {categories && categories.map((c) => {
                                                return (c.name === category) ?
                                                    (<option key={c.name} selected='selected'>{c.name}</option>) :
                                                    (<option key={c.name}>{c.name}</option>)
                                            })}
                                        </select>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>
                            </div>
                        </div>)
                }
            </div>
        );
    }
}

function mapStateToProps({posts}) {
    return {
        redirectPostsForm: posts.redirectPostsForm,
        posts: posts.posts
    }
}

function mapDispatchToProps(dispatch) {
    return {
        editPost: (post) => dispatch(Actions.editPost(post)),
        postFormRedirect: (enabled) => dispatch(Actions.postFormRedirect(enabled))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditPostPage));
