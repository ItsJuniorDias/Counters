import React from 'react';
import { useTheme } from 'styled-components';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const { Navigator, Screen } = createBottomTabNavigator();

import Dashboard from '../screens/Dashboard';
import ConfigScreen from '../screens/ConfigScreen';

export function AppRoutes() {
  const theme = useTheme();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.active_menu,
        tabBarStyle: {
          height: 68,
          padding: 8,
        },
        tabBarLabelStyle: {
          fontSize: 14,
          marginBottom: 8,
        },
      }}
    >
      <Screen
        name="List"
        component={Dashboard}
        options={{
          tabBarIcon: (({ size, color}) =>
            <MaterialIcons
              name="format-list-bulleted"
              size={30}
              color={color}
            />
          ),
        }}
      />

      <Screen
        name="Config"
        component={ConfigScreen}
        options={{
          tabBarIcon: (({ size, color}) =>
            <MaterialCommunityIcons
              name="tools"
              size={30}
              color={color}
            />
          ),
        }}
      />
    </Navigator>
  );
}
