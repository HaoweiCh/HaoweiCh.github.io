import React, {Component} from 'react';

import logo from '@/assets/logo.svg';

class Home extends Component {
    render() {
        return (
            <div className="Content">
                <header className="title">
                    <img src={logo} className="logo" alt="logo"/>
                </header>

                <h1 className="title">Welcome to React</h1>
                <p className="intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        );
    }
}

export default Home;
