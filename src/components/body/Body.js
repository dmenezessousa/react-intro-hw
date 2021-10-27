import React, { Component } from 'react';
import "./Body.css";
import Box from "../box-children/Box";
import rickAndMorty from  "./images/rick2.png";
import rickAndMorty2 from './images/rick1.jpg';
import rickAndMorty3 from "./images/rick3.jpg";
import rickAndMorty4 from "./images/rick4.png";


export class Body extends Component {
    render() {
        return (
            <div className="body">
                <div>
                <img className="rickAndMorty" src={rickAndMorty} alt="Cartoon"></img>
                <p>
                Rick is an eccentric and alcoholic mad scientist, who eschews many ordinary conventions such as school, marriage, love, and family. He frequently goes on adventures with his 14-year-old grandson, Morty, a kind-hearted but easily distressed boy, whose naïve but grounded moral compass plays counterpoint to Rick's Machiavellian ego. Morty's 17-year-old sister, Summer, is a more conventional teenager who worries about improving her status among her peers and sometimes follows Rick and Morty on their adventures.
                </p>
                </div>
                <hr/>
                <div style={{display: "Flex", justifyContent: "center"}}>
                    <Box name="Box1" rickAndMorty={rickAndMorty2}/>
                    <Box name="Box2" rickAndMorty={rickAndMorty3}/>
                    <Box name="Box3" rickAndMorty={rickAndMorty4}/>
                </div>
            </div>
        )
    }
}

export default Body
