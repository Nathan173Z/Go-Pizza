import React, { useState } from 'react';
import { useTheme } from 'styled-components';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Platform } from 'react-native';
import { BottomMenu } from '../components/BottomMenu';

import { OrderProgress } from '../screens/OrderProgress'
import { Login } from '../screens/Login'

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes(){
  const [number, setNumer ] = useState('0');

  const { COLORS } = useTheme();
    return(
      <Navigator
      screenOptions={{
        tabBarActiveTintColor: COLORS.SECONDARY_900,
        tabBarInactiveTintColor: COLORS.SECONDARY_400,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 80,
          paddingVertical: Platform.OS === 'ios' ? 20 : 0
        }
      }}
    >
       <Screen
        name="Cardápio"
        component={OrderProgress}
        options={{
          tabBarIcon: ({ color }) => (
            <BottomMenu title="Cardápio" color={color} />
          )
        }}
      />

      <Screen
        name="OrderProgress"
        component={OrderProgress}
        options={{
          tabBarIcon: ({ color }) => (
            <BottomMenu title="Pedidos" color={color} notifications={number} />
          )
        }}
      />

        </Navigator>
    )
}