import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { AuthContext } from './AuthContext';

import SignInScreen from './SignInScreen';
import ExplorerScreen from './ExplorerScreen';
import AccountScreen from './AccountScreen';

import { Ionicons, FontAwesome5 } from '@expo/vector-icons'; 

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === "Explorer") {
          iconName = "beer"; // Use beer mug icon like in image
          return <FontAwesome5 name={iconName} size={size} color={color} />;
        } else if (route.name === "Account") {
          iconName = focused ? "person" : "person-outline"; // Person icon
          return <Ionicons name={iconName} size={size} color={color} />;
        }
      },
      tabBarActiveTintColor: '#FF6347', // Active color (red-orange)
      tabBarInactiveTintColor: 'gray', // Inactive color
      tabBarStyle: { backgroundColor: '#F8F8F8', paddingBottom: 5 }, // Bottom bar styling
    })}
  >
    <Tab.Screen name="Explorer" component={ExplorerScreen} />
    <Tab.Screen name="Account" component={AccountScreen} />
  </Tab.Navigator>
);

const AppNavigator = () => {
  const { user } = useContext(AuthContext);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user ? (
          <Stack.Screen name="Home" component={TabNavigator} />
        ) : (
          <Stack.Screen name="SignIn" component={SignInScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
