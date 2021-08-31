import * as React from 'react';
import { Text, View,Button,StyleSheet } from 'react-native';
import Loading from "./Loading"
import * as Location from 'expo-location';
import React, { useState, useEffect } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ScreenStack } from 'react-native-screens';


export default class app extends React.Component {
  render(){
    return(
        <Loading />
    );
  }
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'#fff',
  },
  yellowView:{
    flex: 7,
    backgroundColor:'yellow'
  },
  blueView:{
    flex:1,
    backgroundColor:'blue'
  }

});



