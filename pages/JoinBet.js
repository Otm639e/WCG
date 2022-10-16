import * as React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export function JoinBet() {
    return (
      <View style={{flex: 1, alignItems: 'center', flexDirection: "column", paddingTop: 50}}>
         <TextInput
            style={styles.input}
            placeholder="Bet code"
        />
        <Button title="Join"/>
      </View>
       
    );
  }

  const styles = StyleSheet.create({
    input: {
      height: 40,
      width: '80%',
      borderWidth: 1,
      padding: 10,
      marginBottom: 10
    },
  });