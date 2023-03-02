import React, {useState} from 'react';
import {Container, Form, Header, Input, Message} from 'semantic-ui-react';
import axios from "axios";

interface Message {
    id: number;
    sender: string;
    text: string;
}

interface ChatProps {
    messages: Message[];
}

const ChatRoom: React.FC<ChatProps> = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputText, setInputText] = useState<string>('');

    const handleSendMessage = () => {
        const newMessage = {
            id: Date.now(),
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
                const chatMsg = {
                    id: Date.now(),
                    sender: 'ChatGPT',
                    text: response.data.msg,
                };
                setMessages([...messages, newMessage, chatMsg]);
            })
            .catch(error => console.log(error));
    };

    return (
        <Container>
            {messages.map((message) => (
                <Message key={message.id}>
                    <Message.Header>{message.sender}</Message.Header>
                    <p>{message.text}</p>
                </Message>
            ))}
            <Form onSubmit={handleSendMessage}>
                <Input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Type a message..."
                    action={{content: 'Send', type: 'submit'}}
                />
            </Form>
        </Container>
    );
};

export default ChatRoom;
