import React, { Component } from "react";
import TitleBar from "./components/TitleBar";
import "./App.css";

class App extends Component
{
    state =
    {
        arr: []
    };

    //Runs after component is loaded.
    componentDidMount()
    {
        for(let i = 0; i < 10; i++)
        {
            this.setState({ arr: this.state.arr.push(i) });
        }
    }

    render()
    {
        return (
            <div id="page-body">
                <TitleBar />
                {console.log(this.state.arr)}
            </div>
        );
    }
}

export default App;
