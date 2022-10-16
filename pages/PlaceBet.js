import * as React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export function PlaceBet({ route, navigation }) {
    const { gameName, playingDate } = route.params;
    return (
      <View style={{flex: 1, alignItems: 'center', flexDirection: "column", paddingTop: '10%', paddingBottom: '10%'}}>
        <Text> {gameName} </Text>
        <Text> Date: {playingDate} </Text>
        <TextInput
          style={styles.input}
          placeholder="Amount"
          keyboardType="numeric"
        />
        <View style={{height:50, width:100, backgroundColor: '#5F8FAD', alignItems: 'center', justifyContent: 'center', marginTop: 50}}>
            <Button 
                title="Create Bet"
                color= '#FBFBFB'
                onPress={() => 
                    navigation.navigate('My Bets')
                }  
            />
        </View>

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