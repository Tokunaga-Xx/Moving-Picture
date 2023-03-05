import "./App.css"

import { Route, BrowserRouter as Router, Switch } from "react-router-dom"

import React from "react"

import IntroPage from "./components/intro/IntroPage"
import MovieLog from "./components/MovieLog/MovieLog"
import Notfound from "./components/Notfound"

import post from "./components/MovieLog/posts/post"
import postlist from "./components/MovieLog/postList/postList"

interface Props {}

const App: React.FC<Props> = function (props) {
    return (
        <Router>
            <div className={"pageContainer"}>
                <Switch>
                    <Route path="/" exact component={IntroPage} />
                    <Route path="/page" component={MovieLog} />
                    <Route path="/postlist" component={postlist} />
                    <Route path="/posts" component={post} />
                    <Route component={Notfound} />
                </Switch>
            </div>
        </Router>
    )
}

export default App
