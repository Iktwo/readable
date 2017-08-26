import React, {Component} from 'react';

class NotFoundPage extends Component {
    render() {
        return (
            <div className="container">
                <img src="/logo.svg" className="mx-auto mt-2 mb-2" alt="logo" style={{display: 'block', width: 64}}/>
                <span>Could not find page <a href="/">Go back</a></span>

            </div>
        );
    }
}

export default NotFoundPage;
