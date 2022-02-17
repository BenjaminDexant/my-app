import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';

import CameraScreen from './screens/CameraScreen';
import FeedScreen from './screens/FeedScreen';
import ImageScreen from './screens/ImageScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: string | undefined;

            if (route.name === 'Camera') {
              iconName = focused
                ? 'camerao'
                : 'camera';
            } else if (route.name === 'Image') {
              iconName = "picture";
            } else if (route.name === 'Feed') {
               iconName = focused
                ? 'aliwangwang'
                : 'aliwangwang-o1';
            }
  

            // You can return any component that you like here!
            return <AntDesign name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
      })}
      >
        <Tab.Screen
          name="Camera"
          component={CameraScreen}
          options={{ unmountOnBlur: true }}
        />
        <Tab.Screen name="Image" component={ImageScreen} />
        <Tab.Screen name="Feed" component={FeedScreen} />
      </Tab.Navigator>
    </NavigationContainer>  );
};
