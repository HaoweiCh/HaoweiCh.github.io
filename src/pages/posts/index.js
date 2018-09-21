import React, {Component} from 'react';

import Post from './components/post'
import axios from "axios";
import marked from "marked";


class Posts extends Component {
    constructor() {
        super();
        this.state = {posts: [<div><h1>加载中...</h1></div>]}
    }

    componentDidMount(){
        axios.get(window.localStorage.getItem('urlPrefix') + 'posts.json')
            .then(res => {
                const  posts_element = [];
                for (let post of res.data) {
                    posts_element.push(<Post post={post}/>);
                }
                this.setState({
                    posts: posts_element
                })
            })

    }

    render() {
        return (
            <div className="posts">{this.state.posts}</div>
        );
    }
}

export default Posts;
