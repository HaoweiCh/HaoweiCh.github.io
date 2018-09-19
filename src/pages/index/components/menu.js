import React, {Component} from 'react';

class Menu extends Component {
    render() {
        return (
            <nav className="Menu">
                <input id="menu-check" type="checkbox"/>
                <label id="menu-label" htmlFor="menu-check" className="unselectable">
                    <span className="icon close-icon">✕</span>
                    <span className="icon open-icon">☰</span>
                    <span className="text">Menu</span>
                </label>
                <ul>


                    <li className="active"><a href="/">Home</a></li>

                    <li><a href="/about/">About</a></li>

                    <li><a href="/categories/">Categories</a></li>

                    <li><a href="/tags/">Tags</a></li>

                    <li><a href="/index.xml">Subscribe</a></li>


                </ul>
            </nav>
        );
    }
}

export default Menu;
