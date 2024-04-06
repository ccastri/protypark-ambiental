import React from 'react';

const Message = ({ message, isCurrentConnection }: any) => {
  console.log(message);

  const getRandomColor = () => {
    const colors = ['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500']; // Define tus clases de color
    const randomIndex = Math.floor(Math.random() * colors.length); // Genera un índice aleatorio
    return colors[randomIndex]; // Retorna la clase de color aleatoria
  };

  return (
    <div className={`${message.type === 'chat' ? 'bg-gray-200 ' : getRandomColor( )} p-4 flex rounded-3xl ${isCurrentConnection ? 'ml-auto' : 'mr-auto'}`}>
      {message.type === 'join' ? (
        <p className='border-black border-2 bg-white'>{message.sid}</p>
      ) : (
        <p className='border-white border-2 text-white bg-black'>{`${message.sid} ${message.message}`}</p>
      )}
    </div>
  );
};

export default Message;
