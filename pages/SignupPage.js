import * as React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export function SignupPage({ navigation }) {
    return (
      <View style={{flex: 1, alignItems: 'center', flexDirection: "column", justifyContent: 'center', paddingTop: '10%', paddingBottom: '10%'}}>
        <TextInput
            style={styles.input}
            keyboardType="email-address"
            placeholder="Email"
        />
        <TextInput
            style={styles.input}
            placeholder="Password"
        />
        <Button title="Sign up" onPress={() => 
                    navigation.navigate('Select From Groups')
                }/>
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