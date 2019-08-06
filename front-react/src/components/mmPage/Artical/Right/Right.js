import React, {Component} from 'react';


class Right extends Component {
    render() {
        return (
            <div className={"right"}>
                <ul>
                    <li>
                        <a href="/posts/post1">post1</a>
                    </li>
                    <li>
                        <a href="/posts/post1">post2</a>
                    </li>
                    <li>
                        <a href="/posts/post1">post3</a>
                    </li>
                    <li>
                        <a href="/posts/post1">post4</a>
                    </li>
                </ul>
            </div>
        );
    }
}


export default Right;