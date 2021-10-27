import React, { Component } from "react";
import "./Box.css";

export class Box extends Component {
    render() {
    return (
        <div>
            <img src={this.props.rickAndMorty} alt={this.props.name} />
            <span style={{display: "flex", justifyContent: "center"}}>{this.props.name}</span>
        </div>
        );
    }
}
export default Box;
