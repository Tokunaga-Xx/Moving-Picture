import React, {Component} from 'react';
import Nav from './Nav/Nav';
import Slider from './Slider/Slider';

class mmPage extends Component {
    render() {
        return (
            <div className="mmPage">
                <Nav />
                <Slider />
            </div>
        );
    }
}

export default mmPage;