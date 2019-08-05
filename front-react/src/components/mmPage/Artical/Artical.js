import React, {Component} from 'react';
import Left from './Left/Left';
import Right from './Right/Right';


class Artical extends Component {
    render() {
        return (
            <div className={"Artical"}>
                <div className="swiperArea">
                    <Left />
                </div>
                <div className="wordArea">
                    <Right />
                </div>
            </div>
        );
    }
}


export default Artical;