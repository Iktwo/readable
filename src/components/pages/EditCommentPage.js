import React, {Component} from 'react';
import HeaderNav from "../HeaderNav";
import {connect} from 'react-redux';
import {withRouter} from "react-router-dom";
import * as Actions from "../../actions";
import * as API from "../../utils/api";

class EditCommentPage extends Component {
    componentDidMount() {
        const {id} = this.props.match.params;

        API.getComment(id).then(
            (comment) => {
                let comments = [];
                comments.push(comment);

                this.props.updateComments(comments, comment.parentId);
            }
        ).catch((e) => {
            console.error("Error editing post: ", e)
        })
    }

    render() {
        const {id} = this.props.match.params;
        const {comments} = this.props;

        let comment = null;

        for (let k in comments) {
            if (comments.hasOwnProperty(k)) {
                comment = comments[k].filter((c) => {
                    return c.id === id
                });
            }
        }

        if (comment && comment.length === 1) {
            comment = comment[0];
        } else {
            comment = null;
        }

        return (
            <div>
                <HeaderNav title="Editing comment"/>

                {(comment) ? (
                    <div className="container mt-2">
                        <form onSubmit={(e) => {
                            e.preventDefault();

                            API.editComment(comment.id, {
                                body: this.body.value,
                                timestamp: new Date().getTime()
                            }).then((comment) => {
                                let comments = [];
                                comments.push(comment);

                                this.props.updateComments(comments, comment.parentId);
                                this.props.history.push(`/`)
                            })
                                .catch((e) => {
                                    console.error("Error editing post: ", e)
                                })
                        }}>
                            <div className="form-group">
                                <label htmlFor="body">Content</label>
                                <textarea type="text" className="form-control" id="body"
                                          placeholder="Content" rows={3}
                                          defaultValue={comment.body}
                                          required
                                          ref={(body) => this.body = body}/>
                            </div>
                            <div className="form-group">
                                <span>By {comment.author}</span>
                            </div>
                            <button type="submit" className="btn btn-primary">Edit comment</button>
                        </form>
                    </div>
                ) : (<div/>)}
            </div>
        );
    }
}

function mapStateToProps({comments}) {
    return {
        comments: comments.comments
    }
}

function mapDispatchToProps(dispatch) {
    return {
        editComment: (comment) => dispatch(Actions.editComment(comment)),
        updateComments: (comments) => dispatch(Actions.updateComments(comments))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditCommentPage));
