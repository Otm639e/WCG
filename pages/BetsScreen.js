import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Games } from './components/Games'
import { Navbar } from './components/Navbar'

export function BetsScreen({ route, navigation}) {
  const { otherParam } = route.params;
  if (otherParam == 'Group A') {
    return (
      <View style={{flex: 1, alignItems: 'center', flexDirection: "column", justifyContent: 'space-between', paddingTop: '10%', paddingBottom: '10%'}}>
          <Games navigation={navigation} game="Ecuador VS Qatar" date='Nov 20'/>
          <Games navigation={navigation} game="Senegal VS Netherlands" date='Nov 21'/>
          <Games navigation={navigation} game="Senegal VS Qatar" date='Nov 25'/>
          <Games navigation={navigation} game="Netherlands VS Ecuador" date='Nov 25'/>
          <Games navigation={navigation} game="Ecuador VS Senegal" date='Nov 29'/>
          <Games navigation={navigation} game="Netherlands VS Qatar" date='Nov 29'/>
          <Navbar navigation={navigation} />
      </View>
    );
  }
  else if (otherParam == 'Group B') {
    return (
      <View style={{flex: 1, alignItems: 'center', flexDirection: "column", justifyContent: 'space-between', paddingTop: '10%', paddingBottom: '10%'}}>
          <Games navigation={navigation} game="England VS Iran" date='Nov 21'/>
          <Games navigation={navigation} game="USA VS Wales" date='Nov 21'/>
          <Games navigation={navigation} game="Wales VS Iran" date='Nov 25'/>
          <Games navigation={navigation} game="England VS USA" date='Nov 25'/>
          <Games navigation={navigation} game="Iran VS USA" date='Nov 29'/>
          <Games navigation={navigation} game="Wales VS England" date='Nov 29'/>
          <Navbar navigation={navigation} />
      </View>
    );
  }
  else if (otherParam == 'Group C') {
    return (
      <View style={{flex: 1, alignItems: 'center', flexDirection: "column", justifyContent: 'space-between', paddingTop: '10%', paddingBottom: '10%'}}>
          <Games navigation={navigation} game="Argentina VS Saudi Arabia" date='Nov 22'/>
          <Games navigation={navigation} game="Mexico VS Poland" date='Nov 22'/>
          <Games navigation={navigation} game="Poland VS Saudi Arabia" date='Nov 26'/>
          <Games navigation={navigation} game="Argentina VS Mexico" date='Nov 26'/>
          <Games navigation={navigation} game="Poland VS Argentina" date='Nov 30'/>
          <Games navigation={navigation} game="Saudi Arabia VS Mexico" date='Nov 30'/>
          <Navbar navigation={navigation} />
      </View>
    );
  }
  else if (otherParam == 'Group D') {
    return (
      <View style={{flex: 1, alignItems: 'center', flexDirection: "column", justifyContent: 'space-between', paddingTop: '10%', paddingBottom: '10%'}}>
          <Games navigation={navigation} game="Denmark VS Tunisia" date='Nov 22'/>
          <Games navigation={navigation} game="France VS Australia" date='Nov 22'/>
          <Games navigation={navigation} game="Tunisia VS Australia" date='Nov 26'/>
          <Games navigation={navigation} game="France VS Denmark" date='Nov 26'/>
          <Games navigation={navigation} game="Tunisia VS France" date='Nov 30'/>
          <Games navigation={navigation} game="Australia VS Denmark" date='Nov 30'/>
          <Navbar navigation={navigation} />
      </View>
    );
  }
  else if (otherParam == 'Group E') {
    return (
      <View style={{flex: 1, alignItems: 'center', flexDirection: "column", justifyContent: 'space-between', paddingTop: '10%', paddingBottom: '10%'}}>
          <Games navigation={navigation} game="Germany VS Japan" date='Nov 23'/>
          <Games navigation={navigation} game="Spain VS Costa Rica" date='Nov 23'/>
          <Games navigation={navigation} game="Japan VS Costa Rica" date='Nov 27'/>
          <Games navigation={navigation} game="Spain VS Germany" date='Nov 27'/>
          <Games navigation={navigation} game="Japan VS Spain" date='Dec 1'/>
          <Games navigation={navigation} game="Costa Rica VS Germany" date='Dec 1'/>
          <Navbar navigation={navigation} />
      </View>
    );
  }
  else if (otherParam == 'Group F') {
    return (
      <View style={{flex: 1, alignItems: 'center', flexDirection: "column", justifyContent: 'space-between', paddingTop: '10%', paddingBottom: '10%'}}>
          <Games navigation={navigation} game="Morocco VS Croatia" date='Nov 23'/>
          <Games navigation={navigation} game="Belgium VS Canada" date='Nov 23'/>
          <Games navigation={navigation} game="Belgium VS Morocco" date='Nov 27'/>
          <Games navigation={navigation} game="Croatia VS Canada" date='Nov 27'/>
          <Games navigation={navigation} game="Croatia VS Belgium" date='Dec 1'/>
          <Games navigation={navigation} game="Canada VS Morocco" date='Dec 1'/>
          <Navbar navigation={navigation} />
      </View>
    );
  }
  else if (otherParam == 'Group G') {
    return (
      <View style={{flex: 1, alignItems: 'center', flexDirection: "column", justifyContent: 'space-between', paddingTop: '10%', paddingBottom: '10%'}}>
          <Games navigation={navigation} game="Switzerland VS Cameroon" date='Nov 24'/>
          <Games navigation={navigation} game="Brazil VS Serbia" date='Nov 24'/>
          <Games navigation={navigation} game="Cameroon VS Serbia" date='Nov 28'/>
          <Games navigation={navigation} game="Brazil VS Switzerland" date='Nov 28'/>
          <Games navigation={navigation} game="Serbia VS Switzerland" date='Dec 2'/>
          <Games navigation={navigation} game="Cameroon VS Brazil" date='Dec 2'/>
          <Navbar navigation={navigation} />
      </View>
    );
  }
  else if (otherParam == 'Group H') {
    return (
      <View style={{flex: 1, alignItems: 'center', flexDirection: "column", justifyContent: 'space-between', paddingTop: '10%', paddingBottom: '10%'}}>
          <Games navigation={navigation} game="Uruguay VS South Korea" date='Nov 24'/>
          <Games navigation={navigation} game="Portugal VS Ghana" date='Nov 24'/>
          <Games navigation={navigation} game="South Korea VS Ghana" date='Nov 28'/>
          <Games navigation={navigation} game="Portugal VS Uruguay" date='Nov 28'/>
          <Games navigation={navigation} game="South Korea VS Portugal" date='Dec 2'/>
          <Games navigation={navigation} game="Ghana VS Uruguay" date='Dec 2'/>
          <Navbar navigation={navigation} />
      </View>
    );
  }
    
}
