import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as Colors from '../utils/colors';
import * as Styles from '../utils/styles';

const navStyle = {
    backgroundColor: Colors.DARK_BLUE
};

const whiteText = {
    color: Colors.WHITE,
    textAlign: 'center'

};


class HeaderNav extends Component {
    render() {
        const {title, menus} = this.props;

        return (
            <nav className="navbar navbar-expand-lg navbar-dark" style={navStyle}>
                <div className="container-fluid" style={whiteText}>
                    <a className="navbar-brand" href="/" style={Styles.capitalize}>
                        <img src="/logo.svg" width="30" height="30" className="d-inline-block align-top" alt=""/>
                    </a>

                    <a href="/" style={{...Styles.capitalize, ...whiteText}} className="mx-auto">
                        {title}
                    </a>

                    {
                        menus && menus.map((menu) => (
                            <a href={menu.path} key={menu.path + menu.name}> {
                                menu.showAsText ?
                                    (`${menu.name}`) : (
                                        <i className='material-icons' style={{...whiteText}}>{menu.name}</i>)
                            }
                            </a>
                        ))
                    }
                </div>
            </nav>
        );
    }
}

HeaderNav.propTypes = {
    title: PropTypes.string.isRequired,
    menus: PropTypes.array
};


export default HeaderNav;
