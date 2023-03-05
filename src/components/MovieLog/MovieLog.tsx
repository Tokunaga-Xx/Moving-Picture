import React, { useEffect, useState } from "react"

import Data from "./movieData/movieData"
import Footer from "./Footer/Footer"
import Loading from "../intro/load"
import MovieComment from "./Artical/Artical"
import Nav from "./Nav/Nav"
import Slider from "./Slider/Slider"
import fetch from "../intro/fetch"

interface Props {}

const MovieLog: React.FC<Props> = function (props) {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch().then(() => {
            setLoading(false)
        })
    })

    return loading ? (
        <Loading />
    ) : (
        <div className="mmPage">
            <Nav />
            <Slider />
            <Data />
            <MovieComment />
            <Footer />
        </div>
    )
}

export default MovieLog
