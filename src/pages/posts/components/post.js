import React, {Component} from 'react';
import marked from 'marked';

import "./post.css"

class Post extends Component {
    render() {
        return (
            <article className="post post-type-normal" itemScope="" itemType="http://schema.org/Article">
                <div className="post-block">

                    <header className="post-header">
                        <h1 className="post-title" itemProp="name headline">
                            <a className="post-title-link" href={this.props.post.link || "/"} itemProp="url">
                                {this.props.post.title || "未名小文"}
                            </a>
                        </h1>

                        <div className="post-meta">
                        <span className="post-time">

                        <span className="post-meta-item-icon">
                            <i className="fa fa-calendar-o"/>
                        </span>

                        <span className="post-meta-item-text">创建于</span>

                        <time title="创建时间：2018-09-02 09:36:31" itemProp="dateCreated datePublished"
                              dateTime="2018-09-02T09:36:31+08:00"> {this.props.post.date_create || "未知"}</time>

                        <span className="post-meta-divider"> | </span>
                        <span className="post-meta-item-icon">
                          <i className="fa fa-calendar-check-o"/>
                        </span>

                        <span className="post-meta-item-text"> 更新于</span>
                            <time title="修改时间：2018-09-19 10:28:31" itemProp="dateModified"
                                  dateTime="2018-09-19T10:28:31+08:00"> {this.props.post.date_update || "未知"}</time>
                        </span>
                        </div>
                    </header>


                    <div
                        className="post-body han-init-context"
                        itemProp="articleBody"
                        dangerouslySetInnerHTML={{__html: marked(this.props.post.content) || marked("# 载入出错 ")}}/>

                    <div className="post-read-more">
                        <a className="btn"
                           href={this.props.post.link ? this.props.post.link + '#more' : undefined || "/"}
                           rel="contents">
                            阅读全文 »
                        </a>
                    </div>
                </div>

            </article>
        );
    }
}

export default Post;
