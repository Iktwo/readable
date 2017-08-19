import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as Styles from '../utils/styles';

class Categories extends Component {
    render() {
        const ROW_ELEMENTS = 3;

        const arrayData = this.props.categories || [];

        let cards = new Array(arrayData.length + parseInt(arrayData.length / ROW_ELEMENTS, 10)).fill(undefined).map((_, i) => {
            const dataIndex = i - parseInt((i + 1) / (ROW_ELEMENTS + 1), 10);
            const data = arrayData[dataIndex];

            return (((i + 1) % (ROW_ELEMENTS + 1)) === 0) ? (<div key={i} className="w-100 hidden-xs-down hidden-md-up"/>) :

                (<div className="card mb-4" key={i}>
                    <a key={data.name + data.path} href={`/r/${data.path}`}>
                        <img className="card-img-top" src={`https://iktwo.com/images/${data.name}.jpg`}
                             alt="Category icon"/>
                        <div className="card-body">
                            <h4 className="card-title" style={{...Styles.capitalize}}>{data.name}</h4>
                            <p className="card-text">{data.description}</p>
                        </div>
                    </a>
                </div>)
        });


        return (
            <div className="row">
                <div className="card-deck">
                    {cards}
                </div>
            </div>
        );
    }
}

Categories.propTypes = {
    categories: PropTypes.array.isRequired
};

export default Categories;
