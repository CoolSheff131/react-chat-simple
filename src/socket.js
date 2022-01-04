import { act } from 'react-dom/cjs/react-dom-test-utils.production.min';
import io from 'socket.io-client';
const socket = io('http://localhost:5000');
export default socket;
