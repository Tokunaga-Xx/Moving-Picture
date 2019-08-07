import React, {Component} from 'react';

import Lottie from 'react-lottie';
import animationData from './data.json'


export default class LottieControl extends Component {

    constructor(props) {
      super(props);
      this.state = {isStopped: false, isPaused: false};
    }
  
    render() {

      const defaultOptions = {
        loop: false,
        autoplay: true, 
        animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
      const style = {
        animation: 'runningFrames 2.5s forwards 1s',
        opacity: 0,
      }
  
      return(
        <div className="animation-wrapper">
            <Lottie options={defaultOptions} height={200} width={200} style={style}/>
        </div>
      )
    }
  }