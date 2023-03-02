import React, {useState} from 'react';
import {Container, Form, Input, Message} from 'semantic-ui-react';
import axios from "axios";

interface IMessage {
    id: number;
    info: boolean;
    positive: boolean;
    sender: string;
    text: string;
}

interface ChatProps {
    messages: IMessage[];
}

const ChatRoom: React.FC<ChatProps> = () => {
    const [messages, setMessages] = useState<IMessage[]>([]);
    const [inputText, setInputText] = useState<string>('');

    const handleSendMessage = () => {
        const newMessage = {
            id: Date.now(),
            info: true,
            positive: false,
            sender: 'Me',
            text: inputText,
        };
        setMessages([...messages, newMessage]);
        setInputText('');

        const data = {
            msg: inputText
        };

        axios.post('http://47.254.84.246:8080/send', data)
            .then(response => {
                let chatRespMsg = response.data.msg;
                chatRespMsg = chatRespMsg.replace('\n\n', '');
                const chatMsg = {
                    id: Date.now(),
                    info: false,
                    positive: true,
                    sender: 'ChatGPT',
                    text: chatRespMsg,
                };
                setMessages([...messages, newMessage, chatMsg]);
            })
            .catch(error => console.log(error));
    };

    return (
        <Container>
            {messages.map((message) => (
                <Message info={message.info} positive={message.positive} key={message.id}>
                    <Message.Header>{message.sender}</Message.Header>
                    <div style={{whiteSpace: "pre-line"}}>{message.text}</div>
                </Message>
            ))}
            <Form onSubmit={handleSendMessage}>
                <Input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="在此输入"
                    action={{content: '发送', type: 'submit'}}
                />
            </Form>
        </Container>
    );
};

export default ChatRoom;
