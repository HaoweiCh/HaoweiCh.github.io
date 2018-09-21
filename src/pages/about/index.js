import React, {Component} from 'react';
import marked from 'marked';
import axios from 'axios';
import './index.css'

class About extends Component {

    constructor() {
        super();
        this.state = {about: marked('# 加载中 ...')}
    }

    componentDidMount() {
        axios.get(window.localStorage.getItem('urlPrefix') + 'about.md')
            .then(res => {
                const data = res.data;
                this.setState({about: marked(data)})
            })
    }

    render() {
        return (
            <div className="article-inner" dangerouslySetInnerHTML={{__html: this.state.about}}/>
        );
    }
}

export default About;
