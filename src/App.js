import io from 'socket.io-client';
import JoinBlock from './components/JoinBlock';
const socket = io('http://localhost:5000');

function App() {
  return (
    <div className="App">
      <JoinBlock />
    </div>
  );
}

export default App;
