import { useState } from 'react';
import Home from './src/screens/Home';
import History from './src/screens/History';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import data from './src/data/data';

const Stack = createNativeStackNavigator();

export default function App() {

  const [history, setHistory] = useState([]);

  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
          name="Home"
          options={{ headerShown: false }}
        >
          {props => <Home {...props} history={history} setHistory={setHistory} />}
        </Stack.Screen>
        <Stack.Screen
          name="History"
        >
          {props => <History {...props} history={history} setHistory={setHistory} />}
        </Stack.Screen>
    </Stack.Navigator>
  </NavigationContainer>
  );
}