import React from 'react';

const Message = function(props) {
  return (
    <div className="header">
      <h2>{props.text}</h2>
    </div>
  )
}

export default Message;
