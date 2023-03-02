import React from 'react';
import logo from './logo.svg';
import './App.css';
import ChatRoom from "./ChatRoom";
import {Header} from "semantic-ui-react";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Header as="h1">Chat App</Header>
                <img src={logo} className="App-logo" alt="logo"/>
                <ChatRoom messages={[]}/>
            </header>
        </div>
    );
}

export default App;
