import React from 'react';
import JoinBlock from './components/JoinBlock';
import Chat from './components/Chat';
import reducer from './reducer';
import socket from './socket';

function App() {
  const [state, dispatch] = React.useReducer(reducer, {
    joined: false,
    roomId: null,
    userName: null,
  });

  const onLogin = (userData) => {
    dispatch({
      type: 'JOINED',
      payload: userData,
    });
    socket.emit('ROOM:JOIN', userData);
  };
  React.useEffect(() => {
    socket.on('ROOM:JOINED', (users) => {
      console.log(users);
    });
  }, []);
  const addMessage = (message) => {
    dispatch({
      type: 'NEW_MESSAGE',
      payload: message,
    });
  };
  console.log(state);
  return (
    <div className="wrapper">
      {!state.joined ? (
        <JoinBlock onLogin={onLogin} />
      ) : (
        <Chat {...state} onAddMessage={addMessage} />
      )}
    </div>
  );
}

export default App;
