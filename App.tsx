import React from 'react';
import 'react-native-gesture-handler';
import { useFonts,Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani';
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import { Routes } from './src/routes';
import { Background } from './src/components/Background';
import { AuthProvider } from './src/hooks/auth';
import { LogBox } from 'react-native';

LogBox.ignoreLogs(['You are not currently signed in to Expo on your development machine.'])


export default function App() {

  const [fontsLoaded] = useFonts({
    Rajdhani_500Medium,
    Rajdhani_700Bold,
    Inter_400Regular,
    Inter_500Medium
  });

  if(!fontsLoaded){
    return <AppLoading/>
  }

  return (
    <Background>
      <StatusBar style='inverted' backgroundColor='transparent' translucent/>
      <AuthProvider>
        <Routes/>
      </AuthProvider>
    </Background>
  );
}
