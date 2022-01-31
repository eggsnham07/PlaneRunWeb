import React from "react";
import axios from "axios";

export default class LoadVersions extends React.Component {
    state = {
        infos: []
    }

    componentDidMount() {
        axios.get(`${window.location.href}/info.json`)
            .then(res => {
                const infos = res.data["versions"]
                this.setState({ infos })
            })
    }

    render() {
        return (
            <div>
            {this.state.infos
                .map(info => 
                    <span id={info.platform}>{info.platform}: {info.version}<span className="App-spacer">--</span></span>
                )
            }
            </div>
        )
    }
}