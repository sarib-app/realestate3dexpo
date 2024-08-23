import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ViewScreen from './Components/VIewScreen/VIewscreen';
import MockupScreen from './Components/MockUP/MockUP';
import HomeScreen from './Components/Home/HomeScreen';
import MyListingsScreen from './Components/LIisting/MyLIsting';
import CaptureTourScreen from './Components/BeginScan/BeginScan';
import AddFloorScreen from './Components/LIsting/CreateLIsting';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MockupScreen">
        <Stack.Screen name="MockupScreen" component={MockupScreen} options={{headerShown:false}}/>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name="MyListingsScreen" component={MyListingsScreen} options={{headerShown:false}}/>
        <Stack.Screen name="CaptureTourScreen" component={CaptureTourScreen} options={{headerShown:false}}/>
        <Stack.Screen name="AddFloorScreen" component={AddFloorScreen} options={{headerShown:false}}/>



        <Stack.Screen name="View" component={ViewScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
