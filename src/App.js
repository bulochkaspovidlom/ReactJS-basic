import React, { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import MessageList from "./components/MessageList"
import { AUTHOR } from './constants/main';

function App() {
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
  }

  const handleInput = (event) => {
    setMessage(event.target.value);
  }

  useEffect(() => {
    if (messageList.length && messageList[messageList.length - 1].author !== AUTHOR.bot) {
      setTimeout(() => {
        setMessageList([...messageList, {
          text: "Привет, как дела?",
          author: AUTHOR.bot
        }]);
      }, 1500)
    }
  }, [messageList]);

  return (
    <div className="App flex">
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },
      }}
    >
      <div>
        <TextField className='margin8' id="outlined-basic" label="Enter text" variant="outlined" value={message} onChange={handleInput} />
      </div>
      <div>
        <Button className='margin8' variant="outlined" onClick={handleButton}>Add to list</Button>
      </div>
    </Box>

      <MessageList messages={messageList} />
    </div>
  );
}

export default App;
