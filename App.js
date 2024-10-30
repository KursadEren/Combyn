import React from 'react';
import { SafeAreaView } from 'react-native';
import SignupScreen from './src/screen/SignupScreen'; // SignupScreen dosyasının doğru yolunu ekleyin
import LoginScreen from './src/screen/LoginScreen';
import PasswordResetScreen from './src/screen/PasswordResetScreen';
import AccountVerificationScreen from './src/screen/AccountVerificationScreen';
import SplashScreen from './src/screen/SplashScreen';
import DolapPage1 from './src/screen/MainPage';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <DolapPage1 />
    </SafeAreaView>
  );
};

export default App;
