import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function Home({ route, navigation }) {
  const { email } = route.params || {};
  const handleLogout = async () => {
    try {
      navigation.navigate('Login');
    } catch (error) {
      Alert.alert('Error logging out:', error);
    }
  };

  return (
    <View style={styles.container}>

      <Text style={styles.welcome}>Welcome to the Home Page!</Text>
      {email && <Text style={styles.email}>Logged in as: {email}</Text>}
      <View style={styles.logout_container}>
        <TouchableOpacity style={styles.logout_button} onPress={handleLogout} >
          <Text style={styles.logout_Text}>Logout</Text>
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
  welcome: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
  logout_container: {
    top: 40,
  },
  logout_button: {
    backgroundColor: '#FFFFFF',
    width: '60%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 40,
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  logout_Text: {
    fontWeight: 'bold',
    fontSize: 18,
    right: 40,
  },
  email: {
    fontSize: 10,
    color: 'white',
    marginTop: 10,
  },
});
