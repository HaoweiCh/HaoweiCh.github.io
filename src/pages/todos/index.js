import React, {Component} from 'react';
import marked from 'marked';
import axios from "axios";



class Todos extends Component {
    constructor() {
        super();
        this.state = {todos: marked('# 加载中 ...')}
    }

    componentDidMount() {
        axios.get(window.localStorage.getItem('urlPrefix') + 'todo.md')
            .then(res => {
                const data = res.data;
                this.setState({todos: marked(data)})
            })
    }

    render() {
        return (
            <div className="article-inner" dangerouslySetInnerHTML={{__html: this.state.todos}}/>
        );
    }
}

export default Todos;
