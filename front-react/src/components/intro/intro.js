import React, {Component} from 'react';
import Mymovie from './introMymovie';
import Picbed from './introPicbed';
import Anima from './Anima';



class intro extends Component {
    
    render() {
        return (
            <div className={'introContainer'} >
                    <div className={'mymovieContainer'}>
                        <Mymovie />
                    </div>
                    <div className={'picbedContainer'}>
                        <Picbed />
                    </div>
                    <div className={'animationContainer'}>
                        <Anima />   
                    </div>
            </div>
        );
    };
}

export default intro;