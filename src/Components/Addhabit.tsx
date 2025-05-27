import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList, Habit } from "../Type/types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Picker } from "@react-native-picker/picker";

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "Register">;

const AddHabit = () => {
  const navigation = useNavigation<NavigationProp>();
  const [habitName, setHabitName] = useState("");
  const [habitDescription, setHabitDescription] = useState("");
  const [FreQuency, setFreQuency] = useState("Daily");

  const handleAddHabit = async () => {
    if (!habitName.trim() || !habitDescription.trim()) {
      Alert.alert("Please fill in all fields.");
      return;
    }

    const newHabit: Habit = {
      name: habitName,
      description: habitDescription,
      frequency: FreQuency,
      completed: false,
    };

    try {
      const existingData = await AsyncStorage.getItem("habits");
      const habits = existingData ? JSON.parse(existingData) : [];

      habits.push(newHabit);
      await AsyncStorage.setItem("habits", JSON.stringify(habits));

      console.log("Habit saved!");
      navigation.navigate("HabitList", { habits });
    } catch (error) {
      console.error("Error saving habit:", error);
      Alert.alert("Failed to save habit.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>➕ Add New Habit</Text>

      <TextInput
        placeholder="Habit Name"
        value={habitName}
        onChangeText={setHabitName}
        style={styles.input}
      />

      <TextInput
        placeholder="Habit Description"
        value={habitDescription}
        onChangeText={setHabitDescription}
        style={styles.input}
        multiline
      />

      <View style={styles.pickerContainer}>
        <Text style={styles.pickerLabel}>Select Frequency:</Text>
        <Picker
          selectedValue={FreQuency}
          onValueChange={(itemValue) => setFreQuency(itemValue)}
          style={styles.picker}
          dropdownIconColor="#444"
        >
          <Picker.Item label="Daily" value="Daily" />
          <Picker.Item label="Weekly" value="Weekly" />
        </Picker>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleAddHabit}>
        <Text style={styles.buttonText}>✅ Add Habit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddHabit;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#f4f6fc",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 24,
    textAlign: "center",
    color: "#2c3e50",
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    marginBottom: 16,
    fontSize: 16,
  },
  pickerContainer: {
    marginBottom: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  pickerLabel: {
    paddingHorizontal: 12,
    paddingTop: 10,
    fontSize: 16,
    color: "#555",
  },
  picker: {
    height: 50,
    marginTop: -8,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
});
