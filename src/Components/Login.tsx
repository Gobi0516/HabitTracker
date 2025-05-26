import React,{useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, TextInput, Button, StyleSheet,Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../Type/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';



type NavigationProp = NativeStackNavigationProp<RootStackParamList,'Register'>;
const LogIn = () => {
  const navigation = useNavigation<NavigationProp>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
  const handleLogin = async() => {
    try {
      const savedEmail = await AsyncStorage.getItem('userEmail');
      const savedPassword = await AsyncStorage.getItem('userPassword');

      if (email === savedEmail && password === savedPassword) {
        Alert.alert('Login Successful!');
      } else {
        Alert.alert('Invalid email or password');
      }
      navigation.navigate('AddHabit');
    } catch (error) {
      Alert.alert('Error reading data');
    }

    // Handle login logic here
    // For example, you might want to validate the input and call an API  
    // to authenticate the user.
    // This is just a placeholder for demonstration purposes.
    console.log('Login button pressed!');
    //alert('Login button pressed!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Log In</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry
      />

      <Button title="Log In" onPress={handleLogin} />
    </View>
  );
};

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

export default LogIn;
