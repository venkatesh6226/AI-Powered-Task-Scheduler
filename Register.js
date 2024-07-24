import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, Image, View, TouchableOpacity, Alert } from 'react-native';
import axios from 'axios';

export default function Register( { navigation } ) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSecure, setIsSecure] = useState(true);

  const toggleSecure = () => {
    setIsSecure(!isSecure);
  };

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      Alert.alert('Passwords do not match');
      return;
    }
  
    try {
      const response = await axios.post('https://authentication-project1-20dcd7d42e65.herokuapp.com/Register', {
        email,
        password,
      });
      Alert.alert('User registered');
    } catch (error) {
      if (error.response) {
        Alert.alert('Error registering user:', error.response.data);
      } else {
        Alert.alert('Error registering user:', error.message);
      }
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('StartPage')}>
        <Text style={styles.back}>←</Text>
      </TouchableOpacity>
      <Text style={styles.heading}>Let's get</Text>
      <Text style={styles.heading}>Started</Text>
      <StatusBar style="light" />

      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <Image style={styles.email_icon} source={require('./assets/email.png')} />
          <TextInput
            style={styles.input}
            placeholder="Email id"
            placeholderTextColor="#aaa"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <View style={styles.inputWrapper}>
          <Image style={styles.icon} source={require('./assets/lock.png')} />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#aaa"
            secureTextEntry={isSecure}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={toggleSecure}>
            <Image 
              source={isSecure ? require('./assets/eye-off.png') : require('./assets/eye-on.png')} 
              style={styles.eye_icon} 
            />
          </TouchableOpacity>
        </View>

        <View style={styles.inputWrapper}>
          <Image style={styles.icon} source={require('./assets/lock.png')} />
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            placeholderTextColor="#aaa"
            secureTextEntry={true}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.signup_button} onPress={handleRegister}>
          <Text style={styles.signup_Text}>Sign up</Text>
        </TouchableOpacity>
        <Text style={styles.text}>or continue with</Text>
        <TouchableOpacity style={styles.google_button} onPress={() => Alert.alert('Button Pressed')}>
          <Image style={styles.icon} source={require('./assets/google.png')} />
          <Text style={styles.google_Text}>Google</Text>
        </TouchableOpacity>
        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191820',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  heading: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 35,
    top: 60,
    left: 27,
  },
  back: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
    top: 40,
    left: 23,
  },
  inputContainer: {
    top: 110,
    width: '100%',
    alignItems: 'center',
  },
  inputWrapper: {
    backgroundColor: '#1E1D25',
    width: '85%',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#303030',
    borderRadius: 40,
    marginBottom: 19,
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
    left: 5,
  },
  email_icon: {
    width: 20,
    height: 20,
    left: 7,
    marginRight: 14,
  },
  eye_icon: {
    width: 17,
    height: 17,
    marginRight: 10,
  },
  input: {
    color: 'white',
    flex: 1,
    paddingHorizontal: 15,
  },
  buttonContainer: {
    top: 150,
    width: '100%',
    alignItems: 'center',
  },
  signup_button: {
    backgroundColor: '#FFFFFF',
    width: '85%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 40,
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  signup_Text: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  google_Text: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'white',
  },
  text: {
    color: "#aaa",
    top: 15,
  },
  google_button: {
    top: 32,
    backgroundColor: '#191820',
    width: '85%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 40,
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    top: 45,
  },
  loginText: {
    color: '#aaa',
    fontSize: 14,
    marginRight: 10,
  },
  loginButton: {
    backgroundColor: '#191820',
    paddingHorizontal: 1,
    paddingVertical: 5,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
});