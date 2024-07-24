import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function StartPage({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome</Text>
      <Text style={styles.subHeading}>Please choose an option</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Register')}
        >
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#191820',
  },
  heading: {
    fontSize: 36,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subHeading: {
    fontSize: 18,
    color: '#aaa',
    marginBottom: 40,
  },
  buttonContainer: {
    width: '80%',
  },
  button: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 15,
    borderRadius: 40,
    marginBottom: 15,
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});