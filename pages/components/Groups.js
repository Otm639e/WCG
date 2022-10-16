import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export function Groups({ group, navigation }) {
    return (
        <View
            style={{
                height: 50,
                width: '90%',
                backgroundColor: '#5F8FAD',
                alignItems: 'center', 
                justifyContent: 'center',
            }}
        >
            <Button 
                title={group}
                color= '#FBFBFB'
                onPress={() => 
                    navigation.navigate('Bets', {otherParam: group})
                }
            />
        </View>
    );
  }