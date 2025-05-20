import { View,TextInput,Button,Text} from "react-native";
import React, { useState } from "react";
// import { useNavigation } from "@react-navigation/native";

const AddHabit = () => {
    // const navigation = useNavigation();
    const [habitName, setHabitName] = useState("");
    const [habitDescription, setHabitDescription] = useState("");
    const [FreQuency, setFreQuency] = useState("Daily or Weekly");
    // const [selectedFrequency, setSelectedFrequency] = useState("Daily"); 
    // const [selectedFrequency, setSelectedFrequency] = useState("Weekly");
    
    const handleAddHabit = () => {
        // Handle adding the habit logic here
        console.log("Habit Name:", habitName);
        console.log("Habit Description:", habitDescription);
        console.log("FreQuency:Daily or Weekly",FreQuency);
        console.log("Habit added successfully!");

        // Navigate to the next screen if needed
        // navigation.navigate("NextScreen");
    };
    
    return (
        <View style={{ padding: 20 }}>
        <TextInput
            placeholder="Habit Name"
            value={habitName}
            onChangeText={setHabitName}
            style={{ borderWidth: 1, marginBottom: 10, padding: 10 }}
        />
        <TextInput
            placeholder="Habit Description"
            value={habitDescription}
            onChangeText={setHabitDescription}
            style={{ borderWidth: 1, marginBottom: 10, padding: 10 }}
        />
        <Button title="Add Habit" onPress={handleAddHabit} />
        </View>
    );
    }

export default AddHabit;