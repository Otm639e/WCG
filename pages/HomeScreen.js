import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Groups } from './components/Groups'
import { Navbar } from './components/Navbar'

export function HomeScreen({ navigation }) {
    return (
      <View style={{flex: 1, alignItems: 'center', flexDirection: "column", justifyContent: 'space-between', paddingTop: '10%', paddingBottom: '10%'}}>
        <Groups navigation={navigation} group="Group A"/>
        <Groups navigation={navigation} group="Group B"/>
        <Groups navigation={navigation} group="Group C"/>
        <Groups navigation={navigation} group="Group D"/>
        <Groups navigation={navigation} group="Group E"/>
        <Groups navigation={navigation} group="Group F"/>
        <Groups navigation={navigation} group="Group G"/>
        <Groups navigation={navigation} group="Group H"/>
        <Navbar navigation={navigation} />
      </View>
    );
  }
