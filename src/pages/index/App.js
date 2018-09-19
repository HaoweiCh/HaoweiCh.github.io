import React, {Component} from 'react';
import logo from '@/assets/logo.svg';
import Menu from './components/menu';
import Footer from './components/footer'
import './App.css';

class App extends Component {
    render() {
        const site_name = "好为";
        const site_description = "A Hugo theme ported from the static site generator Ivy.";
        return (
            <div className="App home">
                <header className="masthead">
                    <h1><a href="/">{site_name}</a></h1>
                    <p className="tagline">{site_description}</p>
                    <Menu/>
                </header>
                <article className="main">
                    <header className="title"></header>
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                    <p className="App-intro">
                        To get started, edit <code>src/App.js</code> and save to reload.
                    </p>
                    <Footer />
                </article>

            </div>
        );
    }
}

export default App;
