import LoadVersions from "../components/LoadVersions";
import { CSS, URLs } from "../components/Info"
import React from "react";

function Footer() {
    return (
        <footer style={CSS.AppInfoFooter}>
            <br />
            <p>Links:</p>
            <a href={URLs.Discord} rel="noreferrer" target="_blank" className="App-link">
            Discord
            </a>
            <br />

            <a href={URLs.GitHub} rel="noreferrer" target="_blank" className="App-link">
            GitHub
            </a>

            <br />
            <br />

            <LoadVersions />
        </footer>
    )
}

export default Footer