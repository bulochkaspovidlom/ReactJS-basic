import React from 'react';
import Message from "./components/Message"

function App() {
  const message = "Hello world!"

  return (
    <div className="App">
      <Message text={message}/>
    </div>
  );
}

export default App;
