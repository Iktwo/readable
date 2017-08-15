import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Posts from "./Posts";
import {withRouter} from 'react-router-dom';
import HeaderNav from "./HeaderNav";

const CategoryPageWithRouter = withRouter(props => <CategoryPage {...props}/>);

class CategoryPage extends Component {
    render() {
        const {category} = this.props.match.params;

        return (
            <div>
                <HeaderNav title={category} menus={[{name: 'Back', path: '/'}]}/>
                <div className="container">
                    <Posts posts={this.props.posts}/>
                </div>
            </div>
        );
    }
}

CategoryPage.propTypes = {
    posts: PropTypes.array.isRequired
};

export default CategoryPageWithRouter;


