import React from "react";
import logo from "../icon.png"

function Home() {
    return (
        <div>
            <img src={logo} alt="App Logo" className="App-logo" />
            <span>
            <h3>
                <a href="/game/mobile" className="App-link">Mobile</a>
                <span className='App-spacer'>-</span>
                Or
                <span className='App-spacer'>-</span>
                <a href="/game" className="App-link">Desktop</a>
            </h3>
            </span>
            <br />
            <br />
        </div>
    )
}

export default Home