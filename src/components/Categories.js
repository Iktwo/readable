import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as Styles from '../utils/styles';

class Categories extends Component {
    render() {

        let testData = [
            {name: "cats1", path: "cats", description: "A bunch of cats1"},
            {name: "cats2", path: "cats", description: "A bunch of cats2"},
            {name: "cats3", path: "cats", description: "A bunch of cats3"},
            {name: "cats4", path: "cats", description: "A bunch of cats4"},
            {name: "cats5", path: "cats", description: "A bunch of cat5"},
            {name: "cats6", path: "cats", description: "A bunch of cats6"},
            {name: "cats7", path: "cats", description: "A bunch of cats8"},
            {name: "cats8", path: "cats", description: "A bunch of cats29"}
        ];

        const ROW_ELEMENTS = 3;

        let test = new Array(testData.length + parseInt(testData.length / ROW_ELEMENTS)).fill().map((_, i) => {
            console.log("?????? ", i, 1 + i, i % ROW_ELEMENTS, parseInt(i / ROW_ELEMENTS), i !== 0 && ((i + parseInt(i / ROW_ELEMENTS)) % ROW_ELEMENTS) === 0)

           return (i !== 0 && ((i + (parseInt(i / ROW_ELEMENTS) > 0 ? 1: 0)) % ROW_ELEMENTS) === 0) ? ((<div key={i} className="w-100 hidden-xs-down hidden-md-up"/>)) : (
               <div className="card" key={i}>
                   <img className="card-img-top" src="..." alt="Card image cap"/>
                   <div className="card-body">
                       <h4 className="card-title">Card title</h4>
                       <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                       <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                   </div>
               </div>
           )
        });


        return (
            <div className="row">
                {this.props.categories.map((category) => {
                    let imgUrl = `https://iktwo.com/images/${category.name}.jpg`;
                    let categoryUrl = `/r/${category.name}`;

                    return (
                        <a className="col col-sm-12 col-md-4" key={category.name} href={categoryUrl}>
                            <div className="card">
                                <img className="card-img-top" src={imgUrl} alt=''/>
                                <div className="card-body white-text">
                                    <h4 className="card-title" style={{...Styles.capitalize}}>{category.name}</h4>
                                    <p className="card-text">{category.description || ''}</p>
                                </div>
                            </div>
                        </a>

                    )
                })}

                <div className="card-deck">
                    {/*{test}*/}
                    <div className="card" >
                        <img className="card-img-top" src="..." alt="Card image cap"/>
                        <div className="card-body">
                            <h4 className="card-title">Card title</h4>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                    <div className="card" >
                        <img className="card-img-top" src="..." alt="Card image cap"/>
                        <div className="card-body">
                            <h4 className="card-title">Card title</h4>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                    <div className="card" >
                        <img className="card-img-top" src="..." alt="Card image cap"/>
                        <div className="card-body">
                            <h4 className="card-title">Card title</h4>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>

                    <div  className="w-100 hidden-xs-down hidden-md-up"/>

                    <div className="card" >
                        <img className="card-img-top" src="..." alt="Card image cap"/>
                        <div className="card-body">
                            <h4 className="card-title">Card title</h4>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                    <div className="card" >
                        <img className="card-img-top" src="..." alt="Card image cap"/>
                        <div className="card-body">
                            <h4 className="card-title">Card title</h4>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                    <div className="card" >
                        <img className="card-img-top" src="..." alt="Card image cap"/>
                        <div className="card-body">
                            <h4 className="card-title">Card title</h4>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>

                    <div  className="w-100 hidden-xs-down hidden-md-up"/>

                    <div className="card" >
                        <img className="card-img-top" src="..." alt="Card image cap"/>
                        <div className="card-body">
                            <h4 className="card-title">Card title</h4>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                    <div className="card" >
                        <img className="card-img-top" src="..." alt="Card image cap"/>
                        <div className="card-body">
                            <h4 className="card-title">Card title</h4>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                    <div className="card mb-4" >
                        <img className="card-img-top" src="..." alt="Card image cap"/>
                        <div className="card-body">
                            <h4 className="card-title">Card title</h4>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>

                    <div  className="w-100 hidden-xs-down hidden-md-up"/>

                    <div className="card" >
                        <img className="card-img-top" src="..." alt="Card image cap"/>
                        <div className="card-body">
                            <h4 className="card-title">Card title</h4>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                    <div className="card" >
                        <img className="card-img-top" src="..." alt="Card image cap"/>
                        <div className="card-body">
                            <h4 className="card-title">Card title</h4>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                    <div className="card" >
                        <img className="card-img-top" src="..." alt="Card image cap"/>
                        <div className="card-body">
                            <h4 className="card-title">Card title</h4>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>

                    <div  className="w-100 hidden-xs-down hidden-md-up"/>
                </div>
            </div>
        );
    }
}

Categories.propTypes = {
    categories: PropTypes.array.isRequired
};

export default Categories;
