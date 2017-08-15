import React, {Component} from 'react';
import PropTypes from 'prop-types';

class HeaderNav extends Component {
    render() {
        const {title, menus} = this.props;

        return (
            <nav>
                <div className="nav-wrapper blue-grey darken-1">
                    <a className="brand-logo right">{title}</a>
                    <ul id="nav-mobile" className="left hide-on-med-and-down">
                        {
                            menus && menus.map((menu) => (
                                <li key={menu.path + menu.name}><a href={menu.path}>{menu.name}</a></li>
                            ))
                        }
                    </ul>
                </div>
            </nav>
        );
    }
}

HeaderNav.propTypes = {
    title: PropTypes.string.isRequired,
    menus: PropTypes.array.isRequired
};


export default HeaderNav;




