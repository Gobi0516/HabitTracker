import React from 'react';
import { Button, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/Navigator';

type NavProp = NativeStackNavigationProp<RootStackParamList>;

const LogoutButton = () => {
  const navigation = useNavigation<NavProp>();

  const handleLogout = async () => {
    await AsyncStorage.clear();
    Alert.alert('Logged out successfully');
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  };

  return <Button title="Logout" onPress={handleLogout} />;
};

export default LogoutButton;
