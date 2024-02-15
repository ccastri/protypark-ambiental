'use client'
import { FC, useState } from 'react';
interface IChatWindowProps {
//   onUpload: (files: File[]) => void;
  onClose: ()=>void

}
const ChatWindow:FC<IChatWindowProps>= ({ onClose }) => {
  const [messages, setMessages] = useState([]); // Aquí podrías manejar los mensajes del chat

  return (
    <div className="z-50 bg-white w-96 h-82 rounded-lg p-4">
      <div className="border-b-2 mb-4 pb-2">
        <h2 className="text-lg font-bold">Protypark Env</h2>
      </div>
      <div className="h-48 overflow-y-auto mb-4">
        {/* Aquí puedes mapear los mensajes y mostrarlos */}
        {messages.map((message, index) => (
          <div key={index} className="mb-2">
            {message}
          </div>
        ))}
      </div>
      <textarea className="w-full -top-6 flex h-16 border-2 resize-none rounded-md" placeholder="Escribe tu mensaje..." />
      <div className="flex justify-end mt-2">
        <button className="bg-blue-500 text-white px-3 py-1 rounded" onClick={onClose}>
          Cerrar
        </button>
        {/* Aquí podrías agregar el botón para enviar mensajes */}
      </div>
    </div>
  );
};

export default ChatWindow;