import React, { Component } from 'react'
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Sidebar from './components/sidebar/Sidebar';
import Body from './components/body/Body';

export class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div style={{display: "flex"}}>
            <Sidebar/>
            <Body/>
        </div>
        <Footer/>        
      </div>
    )
  }
};

export default App

