import Footer from "../Footer/Footer"
import List from "./List"
import Nav from "../Nav/Nav"
import React from "react"

interface Props {}

const postList: React.FC<Props> = function (props) {
    return (
        <div className="postlist">
            <Nav />
            <List />
            <Footer />
        </div>
    )
}

export default postList
