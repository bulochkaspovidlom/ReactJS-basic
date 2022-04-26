import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MessageList from '../components/MessageList';
import { AUTHOR } from '../constants/main';

function Chats() {
    const [messageList, setMessageList] = useState([]);
    const [message, setMessage] = useState('');

    const handleButton = () => {
        if (message !== '') {
            setMessageList([...messageList, {
                text: message,
                author: AUTHOR.me
            }]);
            setMessage('');
        }
    };
    const handleInput = (event) => {
        setMessage(event.target.value);
    };

    useEffect(() => {
        if (messageList.length && messageList[messageList.length - 1].author !== AUTHOR.bot) {
            setTimeout(() => {
                setMessageList([...messageList, {
                    text: "Привет, как дела?",
                    author: AUTHOR.bot
                }]);
            }, 1500);
        }
    }, [messageList]);

    return (
        <div className="App column">
            <div className='chat-actions padding10'>
                <Button variant="contained">Add chat</Button>
            </div>

            <div className='chat-body padding10'>
            <div className='flex'>
                <TextField autoFocus className='margin10' id="outlined-basic" label="Enter message" variant="outlined" value={message} onChange={handleInput} />
                <IconButton aria-label="send" onClick={handleButton}>
                    <SendIcon />
                </IconButton>
            </div>
            <div>
                <MessageList messages={messageList} />
            </div>
        </div>
        </div>
    );
}

export default Chats;