'use client';
import React, { useState } from 'react';

const ChatForm = ({ onSendMessage }: { onSendMessage: (message: string) => void; }) => {
    const [message, setMessage] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Submitted");

        if (message.trim() !== "") {
            onSendMessage(message);
            setMessage("");
        }
    };

    return (
        <form onSubmit={handleSubmit} className='flex gap-2 mt-4 '>
            <input
                onChange={(e) => setMessage(e.target.value)}
                type="text"
                placeholder='Type your message'
                className='flex-1 px-4 border-2 rounded-lg focus:outline-none py-2'
                value={message}
            />
            <button type='submit' className='px-4 py-2 rounded-lg bg-blue-700 text-white'> Send </button>
        </form>
    );
};

export default ChatForm;
