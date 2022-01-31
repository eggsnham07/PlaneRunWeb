import React from "react";
import { URLs } from "../components/Info";

function DiscordWidget() {
    return (
        <iframe title="Discord widget" src={URLs.DiscordWidget.url}
            width={URLs.DiscordWidget.width} 
            height={URLs.DiscordWidget.height} 
            allowTransparency={URLs.DiscordWidget.allowTransparency} 
            sandbox={URLs.DiscordWidget.sandbox}>    
        </iframe>
    )
}

export default DiscordWidget