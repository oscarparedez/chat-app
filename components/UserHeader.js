/* eslint-disable */
import React from 'react';
import {StyleSheet, View, Text, Image } from 'react-native';
import useStatus from '../hooks/useStatus';
const UserHeader = (props) => {
    const {isOnline, username, userId} = useStatus(
        props.userData.user,
        true, 
        props.userData.randomUser
      );
  return (
    <View style={styles.usernameContainer}>
      <Image
        source={{
          uri: 'https://randomuser.me/api/portraits/men/' + userId + '.jpg',
        }}
        style={styles.avatar}
      />
      <Text style={styles.avatarUsername}>{username}</Text>
    </View>
  );
};

export default UserHeader

const styles = StyleSheet.create({
  usernameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    marginBottom: 20,
  },
  avatar: {
    width: 75,
    height: 75,
    borderRadius: 50,
  },
  avatarUsername: {
    fontWeight: 'bold',
    marginLeft: 10,
    fontSize: 16,
  },
})
