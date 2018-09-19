import React, {Component} from 'react';
import marked from 'marked';



class About extends Component {
    render() {
        const markdownText = '# about';
        const output = marked(markdownText);
        return (
            <div dangerouslySetInnerHTML={{ __html: output }} />
        );
    }
}

export default About;
