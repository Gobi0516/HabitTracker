import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Alert,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList, Habit } from '../Type/types';
import LogoutButton from '../Components/LogoutButton';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'HabitList'>;

const HabitList = () => {
  const navigation = useNavigation<NavigationProp>();
  const [habits, setHabits] = useState<Habit[]>([]);

  useEffect(() => {
    const loadHabits = async () => {
      try {
        const data = await AsyncStorage.getItem('habits');
        if (data) {
          setHabits(JSON.parse(data));
        }
      } catch (error) {
        console.error('Error loading habits:', error);
      }
    };

    const unsubscribe = navigation.addListener('focus', loadHabits);
    return unsubscribe;
  }, [navigation]);

  const markAsComplete = async (index: number) => {
    const updatedHabits = [...habits];
    updatedHabits[index].completed = true;
    setHabits(updatedHabits);
    await AsyncStorage.setItem('habits', JSON.stringify(updatedHabits));
  };

  const deleteHabit = async (index: number) => {
    try {
      const updatedHabits = [...habits];
      updatedHabits.splice(index, 1);
      setHabits(updatedHabits);
      await AsyncStorage.setItem('habits', JSON.stringify(updatedHabits));
      Alert.alert('✅ Habit deleted successfully');
    } catch (error) {
      console.error('Failed to delete habit:', error);
      Alert.alert('❌ Error deleting habit');
    }
  };

  const renderItem = ({ item, index }: { item: Habit; index: number }) => (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.habitName}>📌 {item.name}</Text>
        <Text style={styles.frequency}>📅 {item.frequency}</Text>
      </View>

      <Text style={styles.description}>📝 {item.description}</Text>

      <View style={styles.buttonRow}>
        {!item.completed && (
          <TouchableOpacity
            style={styles.completeButton}
            onPress={() => markAsComplete(index)}
          >
            <Text style={styles.buttonText}>✅ Complete</Text>
          </TouchableOpacity>
        )}

        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => deleteHabit(index)}
        >
          <Text style={styles.buttonText}>🗑 Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🌟 Habit Tracker</Text>
    

      <TouchableOpacity
        style={styles.progressButton}
        onPress={() => navigation.navigate('ProgressTracker')}
      >
        <Text style={styles.progressButtonText}>📊 View Progress</Text>
      </TouchableOpacity>

      <FlatList
        contentContainerStyle={styles.listContainer}
        data={habits}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderItem}
        ListEmptyComponent={
          <Text style={styles.emptyText}>🚫 No habits added yet.</Text>
        }
      />
        <LogoutButton />
    </View>
  );
};

export default HabitList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f6fc',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#2c3e50',
  },
  progressButton: {
    backgroundColor: '#007AFF',
    padding: 12,
    borderRadius: 10,
    marginBottom: 20,
  },
  progressButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  listContainer: {
    paddingBottom: 30,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    borderLeftWidth: 5,
    borderLeftColor: '#5dade2',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  habitName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#34495e',
  },
  frequency: {
    fontSize: 14,
    color: '#6c757d',
  },
  description: {
    fontSize: 15,
    color: '#555',
    marginVertical: 8,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  completeButton: {
    backgroundColor: '#28a745',
    flex: 1,
    paddingVertical: 10,
    borderRadius: 6,
    marginRight: 6,
  },
  deleteButton: {

    backgroundColor: '#dc3545',
    flex: 1,
    paddingVertical: 10,
    borderRadius: 6,
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: '600',
  },
  emptyText: {
    textAlign: 'center',
    fontStyle: 'italic',
    color: '#aaa',
    fontSize: 16,
    marginTop: 40,
  },
});
