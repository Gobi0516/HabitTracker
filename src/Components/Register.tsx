import React,{useState} from 'react';
import { View, Text, TextInput, Button, StyleSheet,Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
});

const Register = () => {
 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);

  const handleRegister = async () => {
    if (!email || !password) {
      Alert.alert('Please fill all fields');
      return;
    }

    try {
      await AsyncStorage.setItem('userEmail', email);
      await AsyncStorage.setItem('userPassword', password);
      Alert.alert('Registration Successful!');
      setIsRegistering(false);
      setEmail('');
      setPassword('');
    } catch (error) {
      Alert.alert('Error saving data');
    }
  };
  // const handleRegister = () => {
    
  //   // Handle registration logic here
  //   // For example, you might want to validate the input and call an API
  //   // to register the user.
  //   // This is just a placeholder for demonstration purposes.
  //   console.log('Register button pressed!');
  // };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
         value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
         value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      
      <TextInput
        style={styles.input}
        placeholder="ConfirmPassword"
        value={ConfirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />

      <Button title="Register" onPress={handleRegister} />
    </View>
  );
}; export default Register;


