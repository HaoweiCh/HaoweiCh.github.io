import React, {Component} from 'react';
import marked from 'marked';



class Tags extends Component {
    render() {
        // const tags_url = "https://gist.githubusercontent.com/Chaaang/353a98aaa316fdec6785c38feb256b53/raw/d8f0ac94faacfda3882d567f15c0d5cb02a24af9/about"
        const markdownText = '# tags';
        const output = marked(markdownText);
        return (
            <div dangerouslySetInnerHTML={{ __html: output }} />
        );
    }
}

export default Tags;
