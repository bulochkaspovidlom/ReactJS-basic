import React, { useEffect, useState } from 'react';
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
      <div className='flex left column actions'>
        <input className='margin8' type="text" placeholder="enter text" value={message} onChange={handleInput} />
        <button className='margin8' onClick={handleButton}>Add to list</button>
      </div>
      <MessageList messages={messageList} />
    </div>
  );
}

export default App;
