import React, { useState } from 'react';
import MessageList from "./components/MessageList"
import { AUTHOR } from './constants/main';

function App() {
  let [messageList, setMessageList] = useState([]);
  let [message, setMessage] = useState('');

  const handleButton = () => {
    if (message != '') {
      const newMesage = {
        text: message,
        author: AUTHOR.me
      }
      setMessageList([...messageList, newMesage]);
      setMessage('');
    }
  }

  const handleInput = (event) => {
    setMessage(event.target.value);
    console.log(message);
  }

  return (
    <div className="App flex">
      <div className='flex left column actions'>
        <input type="text" placeholder="enter text" value={message} onChange={handleInput} />
        <button onClick={handleButton}>Add to list</button>
      </div>
      <MessageList messages={messageList}/>
    </div>
  );
}

export default App;
