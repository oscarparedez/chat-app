/* eslint-disable */
import React from "react";
import {StyleSheet, View, Text, ScrollView } from 'react-native';
import useStatus from '../hooks/useStatus';

const ChatList = (props) => {
    let {chatList, userData} = props
    const {isOnline, username, userId} = useStatus(
        userData.user,
        true, 
        userData.randomUser
      );
    return (
        <View style={styles.chatContainer}>
            <ScrollView>
                {chatList.map((item) => (
                    <View style={styles.messageItem}>
                        <Text
                        style={
                            item.user === username
                            ? styles.messageUsername1
                            : styles.messageUsername2
                        }>
                        {item.user} at {item.time}
                        </Text>
                        <Text
                        style={
                            item.user === username
                            ? styles.messageStatus1
                            : styles.messageStatus2
                        }>
                        {isOnline ? '(online) : ' : '(offline) : '}
                        </Text>
                        <Text
                        style={
                            item.user === username
                            ? styles.messageMessage1
                            : styles.messageMessage2
                        }
                        key={item.id}>
                        {item.message}
                        </Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

export default ChatList

const styles = StyleSheet.create({
    chatContainer: {
        alignSelf: 'stretch',
        marginBottom: 150,
        marginHorizontal: 20,
      },
      messageItem: {
        marginBottom: 15,
      },
      input: {
        width: '80%',
        borderTopColor: 'black',
        borderTopWidth: 1,
        paddingLeft: 20,
        backgroundColor: 'white',
      },
      messageUsername1: {
        textAlign: 'right',
        fontWeight: 'bold',
        fontSize: 14,
      },
      messageStatus1: {
        textAlign: 'right',
        fontSize: 12,
      },
      messageMessage1: {
        textAlign: 'right',
        marginVertical: 5,
        backgroundColor: '#25f8ff',
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 10,
      },
      messageUsername2: {
        fontWeight: 'bold',
        fontSize: 14,
      },
      messageStatus2: {
        fontSize: 12,
      },
      messageMessage2: {
        marginVertical: 5,
        backgroundColor: '#e2e2e2',
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 10,
      },
})