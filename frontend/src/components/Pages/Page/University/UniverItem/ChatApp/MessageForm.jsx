import React, { useState } from 'react';

function MessageForm({ onSend }) {
    const [text, setText] = useState('');
    const [sender, setSender] = useState('user1');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text) {
            onSend({ text, sender });
            setText('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="form-control mt-4">
            <label className="label">
                <span className="label-text">Enter your message:</span>
            </label>
            <div className="input-group">
                <select className="select select-bordered w-full max-w-xs" value={sender} onChange={(e) => setSender(e.target.value)}>
                    <option value="user1">User 1</option>
                    <option value="user2">User 2</option>
                </select>
                <input type="text" placeholder="Message" className="input input-bordered flex-1" value={text} onChange={(e) => setText(e.target.value)} />
                <button type="submit" className="btn btn-primary">Send</button>
            </div>
        </form>
    );
}

export default MessageForm;
