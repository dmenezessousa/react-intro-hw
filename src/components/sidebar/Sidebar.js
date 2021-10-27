import React, { Component } from 'react';
import "./Sidebar.css";

export class Sidebar extends Component {
    //State
    state ={
        sidebarColors: ["Red","Green","Blue"],
        sidebarColorsBg: ""
    };
    //Handlers
    handleSidebarBgColor =(e)=>{
        this.setState({
            sidebarColorsBg: e,
        });
    };

    render() {
        return (
            <div className="sidebar" style={{backgroundColor: this.state.sidebarColorsBg}}>
                <ul>
                    {this.state.sidebarColors.map((item,index)=>{
                        return (
                            <li className="list-style" key={index} onClick={()=>this.handleSidebarBgColor(item)}>{item}</li>
                        )
                    })}
                </ul>
            </div>
        )
    }
};

export default Sidebar
