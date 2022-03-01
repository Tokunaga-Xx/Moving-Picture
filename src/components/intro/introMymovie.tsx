import React from "react"
import douban from "../../images/douban.png"

interface Props {}

const introMymovie: React.FC<Props> = function (props) {
    return (
        <div className="introMymovie">
            <h1>My-movie-log | xyc</h1>
            <a href="/page">
                <button>Learn more</button>
            </a>
            <i>
                <a href="https://www.douban.com/people/68930030/">
                    <img src={douban} alt="douban" />
                </a>
            </i>
        </div>
    )
}

export default introMymovie
