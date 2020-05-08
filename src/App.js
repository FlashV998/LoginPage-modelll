import React from "react";
import {Router} from "@reach/router";
import Home from "./Home.js";

import Task from "./Task.js";
import Task2 from "./Task2.js";
import Notify from "./Notify.js";

class App extends React.Component{
    render(){
        return (
            <div>
            <Router>
            <Home path="/"/>
            <Notify path="/notifications"/>
            <Task path="/task1" />
            <Task2 path="/task2" />
            </Router>
            </div>
        )
    }
}

export default App;
