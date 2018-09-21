import React, {Component} from 'react';
import marked from 'marked';


class Admin extends Component {
    render() {

        const markdownText = '# admin';
        const output = marked(markdownText);
        return (
            <div dangerouslySetInnerHTML={{__html: output}}/>
        );
    }
}

export default Admin;
