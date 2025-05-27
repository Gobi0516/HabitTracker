import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Habit } from '../Type/types';

const ProgressTracker = () => {
  const [habits, setHabits] = useState<Habit[]>([]);
  const [completedCount, setCompletedCount] = useState(0);

  useEffect(() => {
    const loadHabits = async () => {
      try {
        const data = await AsyncStorage.getItem("habits");
        if (data) {
          const parsedHabits = JSON.parse(data);
          setHabits(parsedHabits);
          const completed = parsedHabits.filter((habit: Habit) => habit.completed).length;
          setCompletedCount(completed);
        }
      } catch (error) {
        console.error("Error loading habits:", error);
      }
    };

    loadHabits();
  }, []);

  const total = habits.length;
  const progress = total > 0 ? Math.round((completedCount / total) * 100) : 0;

  // Simple text-based progress bar using emojis
  const progressBarLength = 20;
  const filledLength = Math.round((progress / 100) * progressBarLength);
  const progressBar = '█'.repeat(filledLength) + '░'.repeat(progressBarLength - filledLength);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📈 Progress Tracker</Text>

      <View style={styles.card}>
        <Text style={styles.statLabel}>Total Habits</Text>
        <Text style={styles.statValue}>{total}</Text>

        <Text style={styles.statLabel}>Completed</Text>
        <Text style={styles.statValue}>{completedCount}</Text>

        <Text style={styles.statLabel}>Progress</Text>
        <Text style={styles.statValue}>{progress}%</Text>

        <Text style={styles.progressBar}>{progressBar}</Text>
      </View>
    </View>
  );
};

export default ProgressTracker;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eef1f8',
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 30,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 24,
    width: '90%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },
  statLabel: {
    fontSize: 16,
    color: '#6c757d',
    marginTop: 10,
  },
  statValue: {
    fontSize: 22,
    fontWeight: '700',
    color: '#34495e',
  },
  progressBar: {
    fontSize: 20,
    marginTop: 20,
    letterSpacing: 1.5,
    color: '#007AFF',
    textAlign: 'center',
  },
});
