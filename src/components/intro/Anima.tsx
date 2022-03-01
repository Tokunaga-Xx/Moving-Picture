import Lottie from "react-lottie"
import React from "react"
import animationData from "./data.json"

interface Props {}

const LottieControl: React.FC<Props> = function (props) {
    // const [isStopped, setIsStopped] = useState(false)
    // const [isPaused, setIsPaused] = useState(false)

    const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    }
    const style = {
        animation: "runningFrames 2.5s forwards 1s",
        opacity: 0,
    }

    return (
        <div className="animation-wrapper">
            <Lottie
                options={defaultOptions}
                height={200}
                width={200}
                style={style}
                className="anima"
            />
        </div>
    )
}

export default LottieControl
