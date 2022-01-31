import React from "react";
import { Discord, Github } from "react-bootstrap-icons"
import { URLs } from "../components/Info"

function Navbar() {
    return (
        <div className="App-navbar">
            <a href={URLs.Discord} rel="noreferrer" target="_blank"><Discord color="royalblue" style={{ float: "right" }} size="50px" /></a>
            <a href={URLs.GitHub} rel="noreferrer" target="_blank"><Github color="black" style={{ float: "right", marginRight: "12px" }} size="50px" /></a>
            <a href="/" className="App-link" style={{textDecoration: "none"}}><h3 style={{ marginTop: "0px", marginLeft: "112px" }}>Plane Run</h3></a>
        </div>
    )
}

export default Navbar