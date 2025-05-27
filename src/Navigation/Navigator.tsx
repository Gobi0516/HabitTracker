import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LogIn from "../Screens/Login";
import Register from "../Screens/Register";
import AddHabit from "../Components/Addhabit";
import HabitList from "../Components/HabitList";
import ProgressTracker from "../Components/ProgreessTracker";

export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  AddHabit: undefined;
  HabitList: undefined;
  ProgressTracker: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LogIn} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="AddHabit" component={AddHabit} />
        <Stack.Screen name="HabitList" component={HabitList} />
        <Stack.Screen name="ProgressTracker" component={ProgressTracker} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
