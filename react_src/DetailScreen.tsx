import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import User from './DetailsContainer/User';
import Post from './DetailsContainer/Post';
import Profile from './DetailsContainer/Profile';

const DetailScreen = ({navigation, route}) => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          if (route.name === 'Post') {
            return (
              <View
                style={{backgroundColor: 'red', height: 10, width: 10}}></View>
            );
          } else {
            return (
              <View
                style={{
                  backgroundColor: 'green',
                  height: 10,
                  width: 10,
                }}></View>
            );
          }
        },
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="User" component={User} />
      <Tab.Screen name="Post" component={Post} options={{tabBarBadge: 3}} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

export default DetailScreen;
