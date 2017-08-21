import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HeaderNav from "../HeaderNav";
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";

const NewPostPageWithRouter = withRouter(props => <NewPostPage {...props}/>);

class NewPostPage extends Component {
    render() {
        const {category} = this.props.match.params;
        const {categories} = this.props;

        return (
            <div>
                <HeaderNav title={category && category !== '' ? `New post for ${category}` : `New post`}/>
                <div className="container mt-2">
                    <form>
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input type="text" className="form-control" id="title" placeholder="Title"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="body">Content</label>
                            <textarea type="text" className="form-control" id="body" placeholder="Content" rows={3}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="author">Author</label>
                            <input type="text" className="form-control" id="author" placeholder="Author"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="category">Category</label>
                            <select className="form-control" id="category">
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
            </div>
        );
    }
}

function mapStateToProps({posts}) {
    return {
        posts: posts.posts
    }
}


NewPostPage.propTypes = {
    posts: PropTypes.array.isRequired
};

export default connect(mapStateToProps, null)(NewPostPageWithRouter);
