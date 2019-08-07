import React, {Component} from 'react';


class Nav extends Component {
    render() {
        return (
            <nav className="nav">
                <h1>Br<span>a</span>nd</h1>
                <ul>
                    <li><a href="#">home</a></li>
                    <li><a href="#">posts</a></li>

                </ul>
            </nav>
        );
    }
}

export default Nav;