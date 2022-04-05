import React from 'react';

const MessageList = function(props) {
  return (
    <div className="messageList">
      <ul>
        {props.messages.map((el, i) => 
          <li className='flex column message' key={i}>
            <h3>{el.text}</h3>
            <sup className='author'>{el.author}</sup>
        </li>
        )}
      </ul>
    </div>
  )
}
export default MessageList;
