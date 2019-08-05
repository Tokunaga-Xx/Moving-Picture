import React, {Component} from 'react';
import Nav from './Nav/Nav';
import Slider from './Slider/Slider';
import MovieComment from './Artical/Artical';
import Footer from './Footer/Footer';

class mmPage extends Component {
    render() {
        return (
            <div className="mmPage">
                <Nav />
                <Slider />
                <MovieComment />
                <Footer />
            </div>
        );
    }
}

export default mmPage;