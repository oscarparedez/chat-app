/* eslint-disable */
import React, {useState, useEffect} from 'react';
import {SafeAreaView, TextInput, Text, StyleSheet, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
const LoginScreen = props => {
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    let userIndex = (Math.floor(Math.random() * 6) + 1).toString();
    props.navigation.navigate('Chat', {
      user: username,
      randomUser: userIndex,
    });
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          onChangeText={val => setUsername(val)}
          value={username}
          placeholder="Nombre de usuario"
        />
        <TouchableOpacity style={styles.button} onPress={() => handleLogin()}>
          <Text style={styles.text}>Ingresar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    width: '50%',
    marginHorizontal: 20,
    height: 125,
    justifyContent: 'space-between',
  },
  input: {
    textAlign: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  button: {
    backgroundColor: 'blue',
    paddingHorizontal: 10,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    textAlign: 'center',
  },
});
