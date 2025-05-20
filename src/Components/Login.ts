import React,{useState} from "react";
import {View, Text, TextInput, Button, StyleSheet} from "react-native";
//import {useNavigation} from "@react-navigation/native";


const LogIn = () => {
  //const navigation = useNavigation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Handle login logic here
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
    // Navigate to the next screen if needed
    // navigation.navigate("NextScreen");
  };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Log In</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Name"
//         value={name}
//         onChangeText={setName}
//         autoCapitalize="none"
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//         keyboardType="email-address"
//         autoCapitalize="none"
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry
//       />
//       <Button title="Log In" onPress={handleLogin} />
//     </View>
//   );
 };

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: 24,
      backgroundColor: '#fff',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 16,
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 4,
        marginBottom: 16,
        paddingHorizontal: 8,
        },
   
  });
//    * from being cut off by the notch on iOS and the status bar on Android.
//    * You can remove this if you want to use the full screen.

export default LogIn;

