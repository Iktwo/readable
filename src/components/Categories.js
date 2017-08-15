import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Categories extends Component {
    render() {
        return (
            <div className="row">
                {this.props.categories.map((category) => {
                    let imgUrl = `https://iktwo.com/images/${category.name}.jpg`;
                    let categoryUrl = `/r/${category.name}`;

                    return (
                        <a className="col s12 m4" key={category.name} href={categoryUrl}>
                            <div className="card blue-grey darken-1">

                                <div className="card-image waves-effect waves-block waves-light">
                                    <img className="activator" src={imgUrl} alt=''/>
                                </div>
                                <div className="card-content white-text">
                                    <span className="card-title">{category.name}</span>
                                    <p>{category.description || ''}</p>
                                </div>
                            </div>
                        </a>

                    )
                })}
            </div>
        );
    }
}

Categories.propTypes = {
    categories: PropTypes.array.isRequired
};

export default Categories;
