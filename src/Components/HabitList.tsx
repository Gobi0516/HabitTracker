

import { View, Text, FlatList,Alert,Button } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList, Habit } from '../Type/types';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';


type HabitListRouteProp = RouteProp<RootStackParamList, 'HabitList'>;

const HabitList = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'HabitList'>>();     
  const route = useRoute<HabitListRouteProp>();
  //const { habits } = route.params;
  const [habits, setHabits] = useState<Habit[]>([]);

  useEffect(() => {
    const loadHabits = async () => {
      try {
        const data = await AsyncStorage.getItem("habits");
        if (data) {
          setHabits(JSON.parse(data));
        }
      } catch (error) {
        console.error("Error loading habits:", error);
      }
    };

    const unsubscribe = navigation.addListener("focus", loadHabits); // reload every time

    return unsubscribe;
  }, [navigation]);



  const markAsComplete = async (index: number) => {
    const updatedHabits = [...habits];
    updatedHabits[index].completed = true;
    setHabits(updatedHabits);
    await AsyncStorage.setItem("habits", JSON.stringify(updatedHabits));
  };

  const deleteHabit = async (index: number) => {
    Alert.alert("Delete Habit", "Are you sure you want to delete this habit?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Delete",
        style: "destructive",
        onPress: async () => {
          const updatedHabits = habits.filter((_, i) => i !== index);
          setHabits(updatedHabits);
          await AsyncStorage.setItem("habits", JSON.stringify(updatedHabits));
        },
      },
    ]);
  };
 

 return (
    <View style={{ padding: 20 }}>
        
<Button
  title="Go to Progress Tracker"
  onPress={() => navigation.navigate("ProgressTracker")}
/>
     <FlatList
  data={habits}
  keyExtractor={(_, index) => index.toString()}
  renderItem={({ item, index }) => (
    <View
      style={{
        marginBottom: 10,
        borderBottomWidth: 1,
        paddingBottom: 10,
        backgroundColor: item.completed ? '#e0ffe0' : '#fff',
      }}
    >
      <Text
        style={{
          fontWeight: "bold",
          textDecorationLine: item.completed ? 'line-through' : 'none',
        }}
      >
        {item.name}
      </Text>
      <Text>{item.description}</Text>
      <Text>Frequency: {item.frequency}</Text>

      {!item.completed && (
        <Button title="Mark as Complete" onPress={() => markAsComplete(index)} />
      )}
      <View style={{ marginTop: 5 }}>
        <Button title="Delete" color="green" onPress={() => deleteHabit(index)} />
      </View>
    </View>
  )}
/>

    </View>
  );
};

export default HabitList;
