import React from "react"
import Swal from "sweetalert2"

interface Props {}

const Footer: React.FC<Props> = function (props) {
    const scoreClick = () => {
        Swal.fire({
            type: "success",
            title: "Thanks!",
            text: "Your opinion is being delieved !",
        })
    }
    return (
        <footer className={"footer"}>
            <div className="rateArea">
                <p>Give your score here {"=>"}</p>
                <div className="rate-content" onClick={scoreClick}>
                    <input type="radio" name="rate" />
                    <input type="radio" name="rate" />
                    <input type="radio" name="rate" />
                    <input type="radio" name="rate" />
                    <input type="radio" name="rate" />
                    <input type="radio" name="rate" />
                    <input type="radio" name="rate" />
                    <input type="radio" name="rate" />
                    <input type="radio" name="rate" />
                    <input type="radio" name="rate" />
                </div>
            </div>

            <h3>Designed {"&"} coded by TokunagaX - 2019</h3>
        </footer>
    )
}

export default Footer
