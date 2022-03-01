import React from "react"

interface Props {}

const load: React.FC<Props> = function (props) {
    // useEffect(() => {
    //     document.body.classList.add("overflow")
    // }, [])
    return (
        // old:https://codepen.io/aaroniker/pen/omvYNZ
        <div className="loadArea">
            <div className="body">
                <span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </span>
                <div className="base">
                    <span></span>
                    <div className="face"></div>
                </div>
            </div>
            <div className="longfazers">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <h1>Loading~~~</h1>
        </div>
    )
}

export default load
