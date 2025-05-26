import { View,TextInput,Button,Text} from "react-native";
import React, { useState } from "react";
 import { useNavigation } from "@react-navigation/native";
import{ RootStackParamList } from "../Type/types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Picker } from "@react-native-picker/picker"; // Import Picker from @react-native-picker/picker
import { Habit } from "../Type/types"; // Import Habit type
import AsyncStorage from "@react-native-async-storage/async-storage"; // Import AsyncStorage for data persistence


type NavigationProp = NativeStackNavigationProp<RootStackParamList,'Register'>;
const AddHabit = () => {

    const navigation = useNavigation<NavigationProp>();
    const [habitName, setHabitName] = useState("");
    const [habitDescription, setHabitDescription] = useState("");
    const [FreQuency, setFreQuency] = useState("Daily or Weekly");
    // const [selectedFrequency, setSelectedFrequency] = useState("Daily"); 
    // const [selectedFrequency, setSelectedFrequency] = useState("Weekly");
    
    const handleAddHabit = async() => {
         const newHabit: Habit = {
      name: habitName,
      description: habitDescription,
      frequency: FreQuency,
    };

    try {
    const existingData = await AsyncStorage.getItem("habits");
    const habits = existingData ? JSON.parse(existingData) : [];

    habits.push(newHabit); // Add new habit
    await AsyncStorage.setItem("habits", JSON.stringify(habits));

    console.log("Habit saved!");
    navigation.navigate("HabitList", { habits: [newHabit] }) // Navigate after saving
  } catch (error) {
    console.error("Error saving habit:", error);
  }


    // // Navigate to HabitList and pass habit
    // navigation.navigate(;
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

        <Picker
  selectedValue={FreQuency}
  onValueChange={(itemValue) => setFreQuency(itemValue)}
  style={{ borderWidth: 1, marginBottom: 10 }}
>
  <Picker.Item label="Daily" value="Daily" />
  <Picker.Item label="Weekly" value="Weekly" />
</Picker>
        <Button title="Add Habit" onPress={handleAddHabit} />
        </View>
    );
    }

export default AddHabit;