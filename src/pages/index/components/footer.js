import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className='footer'>
                <hr />
                    <div className="copyright">©
                        <a href={"https://yihui.name"}>Yihui Xie</a> 2017 | <a href={"https://github.com/yihui"}>Github</a> | <a href={"https://twitter.com/xieyihui"}>Twitter</a>
                    </div>
            </footer>
        );
    }
}

export default Footer;
