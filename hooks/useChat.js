/* eslint-disable */
import {useEffect, useState} from 'react';
import io from 'socket.io-client';

const useChat = () => {
  const [messages, setMessages] = useState([]);
  // const [message, setMessage] = useState('');

  const socket = io('https://chatapp-oscarparedez.herokuapp.com/');

  useEffect(() => {
    retrieveChat()
  })

    const retrieveChat = () => {
      socket.on('retrieve_chat', chat => {
        console.log(chat)
        setMessages(chat)
      })
    } 

  // const submitMessage = (msg) => {
  //   let messageInfo = {
  //     message: msg,
  //     user: username,
  //     time:
  //       new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString(),
  //   };
  //   socket.emit('message', messageInfo);
  //   socket.on('chat', messageList => {
  //     setMessages(messageList);
  //   });
  // }

  return {messages};
  // return {retrieveChat, submitMessage}
};
export default useChat
