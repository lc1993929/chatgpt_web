import React from 'react';
import logo from './logo.svg';
import './App.css';
import ChatRoom from "./ChatRoom";
import {Header} from "semantic-ui-react";

function App() {
    return (
        <div className="App">
            <body>
            <Header as="h1">如果长时间未回复或回复了许多重复文本，则为ChatGPT计算错误。请调整你的输入文本。最大输入文本为193字节</Header>
            <img src={logo} className="App-logo" alt="logo"/>
            <ChatRoom messages={[]}/>
            </body>
        </div>
    );
}

export default App;
