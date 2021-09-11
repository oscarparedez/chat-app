/* eslint-disable */
import React, {useState, useEffect} from 'react';
import {TouchableOpacity, SafeAreaView, StyleSheet, TextInput, View, Text} from 'react-native';
import io from 'socket.io-client';
import useStatus from '../hooks/useStatus';
import useChat from '../hooks/useChat';
import UserHeader from '../components/UserHeader';
import ChatList from '../components/ChatList';
// const socket = io('http://192.168.56.1:3000/')
const socket = io('https://chatapp-oscarparedez.herokuapp.com/');

const ChatScreen = props => {
  const userProps = props.route.params
  const {isOnline, username, userId} = useStatus(
    userProps.user,
    true, 
    userProps.randomUser
  );

  // let {messages} = useChat()
  const [chat, setChat] = useState([]);
  const [message, setMessage] = useState('');

    useEffect(() => {
      socket.on('chat message', msgs => {
          setChat(msgs);
        });
    }, [])

  const submitMessage = () => {
    let messageInfo = {
      id: Date.now(), 
      message: message,
      user: username,
      time:
        new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString(),
    };
    socket.emit('chat message', messageInfo);
    setMessage('');
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <UserHeader userData={userProps} />
      <ChatList chatList={chat} userData={userProps} />
      <View style={styles.bottomContainer}>
        <TextInput
          onChangeText={val => setMessage(val)}
          value={message}
          placeholder="Mensaje"
          style={styles.input}
        />
        <TouchableOpacity
          style={styles.submitBtn}
          onPress={() => submitMessage()}>
          <Text style={styles.submitTxt}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    borderTopColor: 'black',
    borderTopWidth: 1,
    paddingLeft: 20,
    backgroundColor: 'white',
  },
  submitBtn: {
    width: '20%',
  },
  submitTxt: {
    backgroundColor: 'blue',
    color: 'white',
    paddingVertical: 15,
    paddingHorizontal: 15,
    alignSelf: 'stretch',
    textAlign: 'center',
  },
});