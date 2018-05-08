import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation'
import 'expo'

import Gallery from './components/Gallery'
import Camera from './components/Camera'

export default createBottomTabNavigator({
  GALLERY: Gallery,
  CAMERA: Camera
}, {
  tabBarOptions: {
    activeTintColor: '#000',
    labelStyle: {
      fontSize: 15,
      position: 'absolute',
      top: 15,
    },
    style: {
      display: 'flex',
      justifyContent: 'center'
    },
    tabStyle: {
      display: 'flex',
      justifyContent: 'center',
      paddingTop: 0,
    },
    animated: true
  }
  
})
