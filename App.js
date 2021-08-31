import * as React from 'react';
import { Text, View,Button,StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ScreenStack } from 'react-native-screens';


export default class app extends React.Component {
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.yellowView}></View>
        <View style={styles.blueView}></View>
      </View>
    );
  }
}
 

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'#fff',
  },
  yellowView:{
    flex: 1,
    backgroundColor:'yellow'
  },
  blueView:{
    flex:5,
    backgroundColor:'blue'
  }

});


