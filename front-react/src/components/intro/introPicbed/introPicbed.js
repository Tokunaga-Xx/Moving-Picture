import React, {Component} from 'react';
import {Link} from "react-router-dom";


class introPicbed extends Component {
    
    render() {
        return (
            <div className="introPicbed">
                <h1>My-image-host</h1>
                <Link to="/imagehost">
                    <button>Log in</button>
                </Link>
                <i><a href="https://github.com/Tokunaga-X/Moving-Picture"><h3>github</h3></a></i>
            </div>
        );
    }
}

export default introPicbed;