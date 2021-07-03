import { useEffect, useRef, useState } from 'react';
import socketClient from 'socket.io-client';

const CHAT_EVENT = 'newChatMessage';
const SERVER_URL = process.env.REACT_APP_SERVER_URL || 'http://127.0.0.1:8080';


const useChat = (roomId, userName) => {
  const [messages, setMessages] = useState([]);
  const socketRef = useRef();

  useEffect(() => {
    socketRef.current = socketClient(SERVER_URL, {
      query: { roomId, userName },
    });

    socketRef.current.on(CHAT_EVENT, (message) => {
      const incomingMessage = {
        ...message,
        ownedByCurrentUser: message.senderId === socketRef.current.id,
      };
      setMessages((messages) => [...messages, incomingMessage]);
    })

    return () => {
      socketRef.current.disconnect();
    };
  }, [roomId, userName])

  const sendMessages = (messageBody) => {
    socketRef.current.emit(CHAT_EVENT, {
      body: { messageBody, userName },
      senderId: socketRef.current.id,
    })
  }

  return { messages, sendMessages };
}

export default useChat;