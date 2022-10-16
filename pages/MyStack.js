import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from "./HomeScreen.js";
import { BetsScreen } from "./BetsScreen.js";
import { PlaceBet } from "./PlaceBet.js";
import { JoinBet } from "./JoinBet.js";
import { LoginPage } from "./LoginPage.js";
import { SignupPage } from './SignupPage.js';
import { Mybets } from "./MybetsPage.js";

const Stack = createNativeStackNavigator();

export function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginPage}/>
      <Stack.Screen name="Sign up" component={SignupPage}/>
      <Stack.Screen name="Select From Groups" component={HomeScreen}/>
      <Stack.Screen name="My Bets" component={Mybets} />
      <Stack.Screen name="Bets" component={BetsScreen} />
      <Stack.Screen name="Place Bet" component={PlaceBet} />
      <Stack.Screen name="Join Bet" component={JoinBet} />
    </Stack.Navigator>
  );
};
