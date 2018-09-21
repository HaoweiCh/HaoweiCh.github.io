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
                    To get started, edit <code>src/App.js</code>  and save to reload.
                </p>
                <p className="intro">
                    <p>process.env.NODE_ENV: {process.env.NODE_ENV}</p>
                    <p>Browser Name: {navigator.appName}</p>
                    <p>Browser Version: {navigator.appVersion}</p>
                    <p>Browser CodeName: {navigator.appCodeName}</p>
                    <p>Browser Language: {navigator.language}</p>
                    <p>navigator.platform: {navigator.platform}</p>
                    <p>Browser Online: {navigator.onLine}</p>

                    <p>Cookies Enabled: {navigator.cookieEnabled}</p>
                    <p>Header User-Agent: {navigator.userAgent}</p>

                    <p>window.orientation: {window.orientation}</p>
                    <p>window.innerWidth: {window.innerWidth}</p>
                    <p>window.innerHeight: {window.innerHeight}</p>
                </p>
            </div>
        );
    }
}

export default Home;
