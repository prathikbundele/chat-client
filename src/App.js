import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ChatPage from './components/ChatPage'
import socketIO from 'socket.io-client';
const socket = socketIO.connect('http://localhost:4000');

function App() {
  return (
    <div className="App">
      
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home socket={socket} />}></Route>
          <Route path="/chat" element={<ChatPage socket={socket} />}></Route> 
        </Routes>
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
