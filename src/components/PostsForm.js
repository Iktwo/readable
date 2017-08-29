import React, { Component } from 'react';

class PostsForm extends Component {
    render() {
        const {category, categories, onSubmitForm, initialData} = this.props;

        return (
            <div>
                <form onSubmit={(e) => {
                    e.preventDefault();

                    onSubmitForm({
                        title: this.title.value,
                        body: this.body.value,
                        author: this.author.value || 'Anon',
                        category: this.category.value
                    })
                }}>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input type="text" className="form-control" id="title" placeholder="Title"
                               defaultValue={initialData && initialData.title ? initialData.title : ''}
                               required
                               ref={(title) => this.title = title}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="body">Content</label>
                        <textarea type="text" className="form-control" id="body"
                                  placeholder="Content" rows={3}
                                  defaultValue={initialData && initialData.body ? initialData.body : ''}
                                  required
                                  ref={(body) => this.body = body}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="author">Author</label>
                        <input type="text" className="form-control" id="author" placeholder="Author"
                               defaultValue={initialData && initialData.author ? initialData.author : ''}
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
