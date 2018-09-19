import React, {Component} from 'react';
import marked from 'marked';
import axios from 'axios';
import './index.css'

class About extends Component {

    constructor () {
        super();
        this.state = { about: marked('# about') }
    }

    componentDidMount() {
        const about_url = "https://gist.githubusercontent.com/Chaaang/353a98aaa316fdec6785c38feb256b53/raw/d8f0ac94faacfda3882d567f15c0d5cb02a24af9/about"
        axios.get(about_url)
            .then(res => {
                const data = res.data;
                console.log(marked(data));
                this.setState({about: marked(data)})
            })
    }
    render() {

        const markdownText = '# about';
        const output = marked(markdownText);
        return (
            <div className="article-inner" dangerouslySetInnerHTML={{ __html: this.state.about }} />
        );
    }
}

export default About;
