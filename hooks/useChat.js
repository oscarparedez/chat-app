/* eslint-disable */
import {useEffect, useState} from 'react';

const useChat = (socket) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const retrieveChat = () => {
      socket.emit('retrieve_chat', '')
      socket.on('retrieve_chat', msgs => {
        setMessages(msgs)
      })
    }
    retrieveChat()
    return ''; 
  }, [socket])
  return messages;
};
export default useChat
