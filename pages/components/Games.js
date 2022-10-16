import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export function Games({ game, date, navigation }) {
    return (
        <View
            style={{
                height: 100,
                width: '90%',
                backgroundColor: '#5F8FAD',
                alignItems: 'center', 
                justifyContent: 'center',
            }}
        >
            <Button 
                title={game}
                color= '#FBFBFB'
                onPress={() => 
                    navigation.navigate('Place Bet', {gameName: game, playingDate: date})
                }
            />
        </View>
    );
  }