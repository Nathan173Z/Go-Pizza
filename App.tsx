import React from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { ThemeProvider } from 'styled-components';
import theme from './src/global/styles/theme';
import { useFonts, DMSans_400Regular } from '@expo-google-fonts/dm-sans';
import { DMSerifDisplay_400Regular } from '@expo-google-fonts/dm-serif-display';

import { NavigationContainer } from '@react-navigation/native';
import { Routes  } from './src/routes/index';
import { Login } from './src/screens/Login';
import { OrderProgress } from './src/screens/OrderProgress';
import { Loading } from './src/components/loading';


SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    DMSans_400Regular,
    DMSerifDisplay_400Regular
  })
  if(!fontsLoaded) return null;
  
  SplashScreen.hideAsync();

  return (
    <ThemeProvider theme={theme}>

    {fontsLoaded ? <Routes /> : <Loading />}
  </ThemeProvider>   
  );
}