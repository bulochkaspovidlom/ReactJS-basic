import React, { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import SendIcon from '@mui/icons-material/Send';
import IconButton from '@mui/material/IconButton';
import MessageList from "./components/MessageList"
import { AUTHOR } from './constants/main';

const App = () => {
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
      <Container maxWidth="md">
        <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1 },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'end'
            }}
          >
          <TextField autoFocus className='margin8' id="outlined-basic" label="Enter message" variant="outlined" value={message} onChange={handleInput} />
          <IconButton aria-label="send" onClick={handleButton}>
            <SendIcon />
          </IconButton>
        </Box>
      </Container>

      <Container maxWidth="md">
        <MessageList messages={messageList} />
      </Container>
    </div>
  );
}

export default App;
