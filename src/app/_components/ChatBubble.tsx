'use client'
import { FC, ReactNode, useState } from 'react';
import ChatWindow from './ChatWindow'; // Importa el componente de la ventana de chat


interface TooltipProps {
  text: string;
  children: ReactNode;
}
const Tooltip = ({ text, children }: TooltipProps) => {
  return (
    <div className="fixed bottom-20 right-40 flex">
      {children}
      <div className="opacity-0 w-44 group-hover:opacity-100 bg-gray-800 text-white text-xs py-1 px-2 rounded absolute -bottom-8 left-1/2 transform -translate-x-1/2">
        {text}
      </div>
    </div>
  );
};

// export default Tooltip;

const ChatBubble = () => {
  const [showChatModal, setShowChatModal] = useState(false);

  const toggleChatModal = () => {
    setShowChatModal(!showChatModal);
  };

  return (
    <div className="group z-50   " >
      {/* Chat bubble */}
      <Tooltip text="¿Necesitas ayuda? Conversa con Cupertino y recibe ayuda">
        <div className="fixed bottom-5 right-5 bg-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center cursor-pointer" onClick={toggleChatModal}>
          <span>Chat</span>
        </div>
      </Tooltip>

      {/* Chat modal */}
      {showChatModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded-lg">
            {/* Render the chat window */}
            <ChatWindow onClose={toggleChatModal} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBubble;