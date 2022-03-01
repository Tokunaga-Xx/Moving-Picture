import React from "react"

interface Props {}

const Notfound: React.FC<Props> = function (props) {
    return (
        <div className="notfoundcontainer">
            <div className="notfound">
                <p id="error">
                    E<span>r</span>ror
                </p>
                <p id="code">
                    4<span>0</span>
                    <span>4</span>
                </p>
            </div>
        </div>
    )
}

export default Notfound
