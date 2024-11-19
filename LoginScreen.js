import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Alert, ImageBackground, Platform, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Default credentials
    const defaultEmail = 'sudheer@gmail.com';
    const defaultPassword = '123';

    if (email === defaultEmail && password === defaultPassword) {
      navigation.navigate('Home');
    } else {
      Alert.alert('Error', 'Invalid email or password. Please try again.');
    }
  };

  return (
    <ImageBackground 
      source={require('../MyNewsApp/assets/sudheer.jpg')} // Replace with the actual path of your image
      style={styles.backgroundImage}
    >
      <KeyboardAvoidingView 
        style={styles.container} 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.innerContainer}>
            <Text style={styles.title}>Login</Text>
            
            <TextInput
              style={styles.input}
              placeholder="Email"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />
            
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
            
            <Button title="Login" onPress={handleLogin} />
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'cover', // Ensure the image covers the entire screen
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    width: '100%', // Ensures full width on all devices
  },
  innerContainer: {
    width: '80%', // Adjusted to maintain a nice layout
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Light background for the form to stand out
    padding: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    marginBottom: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#333',
  },
  input: {
    height: 45,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 12,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    width: '100%', // Full width to match inner container
  },
});

export default LoginScreen;
