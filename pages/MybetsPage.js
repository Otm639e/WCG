import * as React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { Navbar } from './components/Navbar'

export function Mybets({ navigation }) {
    return (
      <View style={{flex: 1, alignItems: 'center', flexDirection: "column", justifyContent: 'center', paddingTop: '10%', paddingBottom: '10%'}}>
        <Text>My Bets</Text>
        <Navbar navigation={navigation} />
      </View>
    );
  }
