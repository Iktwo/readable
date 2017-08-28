import React, { Component } from 'react';

class PostsForm extends Component {
    render() {
        const {category, categories, onSubmitForm} = this.props;

        return (
            <div>
                <form onSubmit={onSubmitForm}>
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
        );
    }
}

export default PostsForm;
