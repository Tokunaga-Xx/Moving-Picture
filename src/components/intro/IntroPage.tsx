import React, { useEffect, useState } from "react"

import Anima from "./Anima"
import Loading from "./load"
import Mymovie from "./introMymovie"
import Picbed from "./introPicbed"
import fetch from "./fetch"

interface Props {}

const IntroPage: React.FC<Props> = function (props) {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch().then(() => {
            setLoading(false)
        })
    })

    return loading ? (
        <Loading />
    ) : (
        <div className={"introContainer"}>
            <div className={"mymovieContainer"}>
                <Mymovie />
            </div>
            <div className={"picbedContainer"}>
                <Picbed />
            </div>
            <div className={"animationContainer"}>
                <Anima />
            </div>
        </div>
    )
}

export default IntroPage
