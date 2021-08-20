import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { fontSize } from 'styled-system';

function Feed() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Feed!</Text>
    </View>
  );
}

function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile!</Text>
    </View>
  );
}

function video() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>video!</Text>
    </View>
  );
}
function shopping() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>shopping!</Text>
    </View>
  );
}
function search() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>search</Text>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator(
);

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      activeColor="#2f2f2f"
      Style={{ fontSize: 8 }}
      barStyle={{ backgroundColor: "white" }}
      tabBarPosition='bottom'
      
      
      backBehavior='history'
    >
            <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarLabel: 'Home',
          tabBarLabelStyle : { fontSize : 12 } , 
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
            <Tab.Screen
        name="search"
        component={search}
        options={{
          tabBarLabel: 'search',
          tabBarLabelStyle : { fontSize : 12 } , 
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="magnify" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="video"
        component={video}
        options={{
          tabBarLabel: 'video',
          tabBarLabelStyle : { fontSize : 12 } , 
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="play-box-multiple-outline" color={color} size={26} />
          ),
        }}
      />
        <Tab.Screen
        name="shopping"
        component={shopping}
        options={{
          tabBarLabel: 'shop',
          tabBarLabelStyle : { fontSize : 12 } , 
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="shopping-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarLabelStyle : { fontSize : 12 } , 
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
