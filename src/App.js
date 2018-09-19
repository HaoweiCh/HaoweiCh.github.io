import React, {Component} from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./pages/home/index"
import About from "./pages/about/index"
import Posts from "./pages/posts/index"
import Tags from "./pages/tags/index"

class Footer extends Component {
    render() {
        return (
            <footer className='footer'>
                <hr/>
                <div className="copyright">©
                    <a href={"http://blog.haowei.ch"}>ChangHaoWei</a> 2018 | <a
                        href={"https://github.com/chaaang"}>Github</a>
                </div>
            </footer>
        );
    }
}

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
                    <li><a href="/posts">文章集</a></li>
                    <li><a href="/tags">标签册</a></li>
                    <li><a href="/about">技术栈</a></li>
                </ul>
            </nav>
        );
    }
}

class App extends Component {
    render() {
        const site_name = "好为";
        const site_description = "Try harder than yesterday, Maybe I would get lucky today ：）";
        return (
            <div className="App home">
                <header className="masthead">
                    <h1><a href="/">{site_name}</a></h1>
                    <p className="tagline">{site_description}</p>
                    <Menu/>
                </header>
                <article className="main">
                    <Router>
                        <div>
                            <Route exact path="/" component={Home}/>
                            <Route path="/about" component={About}/>
                            <Route path="/posts" component={Posts}/>
                            <Route path="/Tags" component={Tags}/>
                        </div>
                    </Router>
                    <Footer/>
                </article>

            </div>
        );
    }
}

export default App;
