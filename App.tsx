// import React from 'react';
// import { SafeAreaView, StyleSheet,LogBox} from 'react-native';
// import HabitList from './src/Components/HabitList';
// import AddHabit from './src/Components/Addhabit';
// import LogIn from './src/Components/Login';
// import Register from './src/Screens/Register';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';   
// import ProgressTracker from './src/Components/ProgreessTracker';
// import navBar from './src/Navigation/Navigator'


// const Stack = createNativeStackNavigator();


// const App = () => {
//   return (
//     <NavigationContainer>

//       < NavBar/>
     
//     </NavigationContainer>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });

// export default App;
import React from 'react';
import Navigator from './src/Navigation/Navigator';

const App = () => {
  return <Navigator />;
};

export default App;
