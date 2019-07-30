import React, {Component} from 'react';
import Mymovie from './introMymovie/introMymovie';
import Picbed from './introPicbed/introPicbed';


class intro extends Component {
    render() {
        return (
            <div className={'introContainer'}>
                <div className={'mymovieContainer'}>
                    <Mymovie />
                </div>
                <div className={'picbedContainer'}>
                    <Picbed />
                </div>
            </div>
        );
    }
}

export default intro;