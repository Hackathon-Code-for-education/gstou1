import React, { useState } from 'react';
import MessageForm from './MessageForm';

function ChatApp() {
    const [messages, setMessages] = useState([]);

    const handleSend = (newMessage) => {
        setMessages([...messages, newMessage]);
    };

    return (
        <div className="container mx-auto p-4">
            <div className="chat-box bg-base-100 p-4 h-96 overflow-auto">
                {messages.map((msg, index) => (
                    <div key={index} className={`flex ${msg.sender === 'user1' ? 'justify-start' : 'justify-end'}`}>
                        <div className={`alert shadow-lg ${msg.sender === 'user1' ? 'alert-info' : 'alert-success'}`}>
                            <div>{msg.text}</div>
                        </div>
                    </div>
                ))}
            </div>
            <MessageForm onSend={handleSend} />
        </div>
    );
}

export default ChatApp;
