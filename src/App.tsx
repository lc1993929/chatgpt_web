import React from 'react';
import logo from './logo.svg';
import './App.css';
import ChatRoom from "./ChatRoom";
import {Header, Image} from "semantic-ui-react";

function App() {
    return (
        <div className="App">
            <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.1/semantic.min.css"></link>

            <body>
            <Header as='h2' icon textAlign='center'>
                <Image src={logo} className="App-logo" alt="logo"/>
                <Header.Content>如果长时间未回复或回复了许多重复文本，则为ChatGPT计算错误。请调整你的输入文本。最大输入文本为193字节</Header.Content>
            </Header>
            <ChatRoom messages={[]}/>
            </body>
        </div>
    );
}

export default App;
