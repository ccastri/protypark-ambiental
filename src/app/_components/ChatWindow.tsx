import React, { useEffect, useState, useRef } from 'react';
import { io } from 'socket.io-client';
import Message from './Message';

interface IChatWindowProps {
  onClose: () => void;
}

interface IMessage {
  sid: string;
  type: string;
  message?: string;
}

const ChatWindow: React.FC<IChatWindowProps> = ({ onClose }) => {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const [socket, setSocket] = useState<any>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null); // Ref for the message container element

  useEffect(() => {
    const socket = io('http://localhost:8000', { path: '/sockets' });

    socket.on('connect', () => {
      console.log('Connected to WebSocket server');
    });

    socket.on('disconnect', () => {
      console.log('Disconnected from WebSocket server');
    });

    socket.on('join', (data: IMessage) => {
      setMessages(prevMessages => [...prevMessages, { ...data, type: 'join' }]);
    });

    socket.on('chat', (data: IMessage) => {
      setMessages(prevMessages => [...prevMessages, { ...data, type: 'chat' }]);
      scrollToBottom(); // Scroll to the bottom when a new message arrives
    });

    setSocket(socket);

    return () => {
      socket.disconnect();
    };
  }, []);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const sendMessage = () => {
    if (inputValue.trim()) {
      if (socket) {
        socket.emit('chat', inputValue);
      }
      setInputValue('');
    }
  };

  return (
    <div className="z-50 bg-white w-96 h-82 flex flex-col rounded-lg p-4">
      <div className="border-b-2 mb-4 pb-2">
        <h2 className="text-lg font-bold">Protypark Env</h2>
        <p></p>
      </div>
      <div className="h-48 border-2 flex flex-col pt-40 px-6 overflow-y-auto mb-4">
        {messages.map((message, index) => (
          <div key={index} className="mb-2 border-2   shadow-6xl">
            <Message message={message} isCurrentConnection={message.type === 'chat'}/>
          </div>
        ))}
        <div ref={messagesEndRef} /> {/* Ref to the bottom of the message container */}
      </div>
      <textarea
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        className="w-full -top-6 flex h-16 border-2 resize-none rounded-md"
        placeholder="Escribe tu mensaje..."
      />
      <div className="flex justify-end mt-2">
        <button className="bg-blue-500 text-white px-3 py-1 rounded" onClick={onClose}>
          Cerrar
        </button>
        <span className="bg-blue-500 text-white px-3 py-1 rounded ml-2" onClick={sendMessage}>
          Enviar
        </span>
      </div>
    </div>
  );
};

export default ChatWindow;





// import React, { useState, useEffect, useRef } from "react";
// import "./App.css";

// function App() {
//   const [clientId, setClienId] = useState(
//     Math.floor(new Date().getTime() / 1000)
//   );

//   const [chatHistory, setChatHistory] = useState([]);
//   const [isOnline, setIsOnline] = useState(false);
//   const [textValue, setTextValue] = useState("");
//   const [websckt, setWebsckt] = useState();

//   const [message, setMessage] = useState([]);
//   const [messages, setMessages] = useState([]);

//   useEffect(() => {
//     const url = "ws://localhost:8000/ws/" + clientId;
//     const ws = new WebSocket(url);

//     ws.onopen = (event) => {
//       ws.send("Connect");
//     };

//     // recieve message every start page
//     ws.onmessage = (e) => {
//       const message = JSON.parse(e.data);
//       setMessages([...messages, message]);
//     };

//     setWebsckt(ws);
//     //clean up function when we close page
//     return () => ws.close();
//   }, [message,messages]);

//   const sendMessage = () => {
//     websckt.send(message);
//     // recieve message every send message
//     websckt.onmessage = (e) => {
//       const message = JSON.parse(e.data);
//       setMessages([...messages, message]);
//     };
//     setMessage([]);
//   };

//   return (
//     <div className="container">
//       <h1>Chat</h1>
//       <h2>Your client id: {clientId} </h2>
//       <div className="chat-container">
//         <div className="chat">
//           {messages.map((value, index) => {
//             if (value.clientId === clientId) {
//               return (
//                 <div key={index} className="my-message-container">
//                   <div className="my-message">
//                     <p className="client">client id : {clientId}</p>
//                     <p className="message">{value.message}</p>
//                   </div>
//                 </div>
//               );
//             } else {
//               return (
//                 <div key={index} className="another-message-container">
//                   <div className="another-message">
//                     <p className="client">client id : {clientId}</p>
//                     <p className="message">{value.message}</p>
//                   </div>
//                 </div>
//               );
//             }
//           })}
//         </div>
//         <div className="input-chat-container">
//           <input
//             className="input-chat"
//             type="text"
//             placeholder="Chat message ..."
//             onChange={(e) => setMessage(e.target.value)}
//             value={message}
//           ></input>
//           <button className="submit-chat" onClick={sendMessage}>
//             Send
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;