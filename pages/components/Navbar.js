import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export function Navbar({ group, navigation }) {
    return (
        <View
            style={{
                height: 100,
                backgroundColor: '#5F8FAD',
                alignItems: 'center', 
                justifyContent: 'center',
                flexDirection: 'row',
                width: '100%',
                position: 'absolute', //Here is the trick
                bottom: 0, //Here is the trick
            }}
        >
            <Button 
                title='Groups'
                color= '#FBFBFB'
                onPress={() => 
                    navigation.navigate('Select From Groups')
                }
            />
            <Button 
                title='My Bets'
                color= '#FBFBFB'
                onPress={() => 
                    navigation.navigate('My Bets')
                }
            />
            <Button 
                title="Join Bet"
                color= '#FBFBFB'
                onPress={() => 
                    navigation.navigate('Join Bet')
                }  
            />
        </View>
    );
  }