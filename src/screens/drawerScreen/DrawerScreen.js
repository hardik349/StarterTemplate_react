import {DrawerContentScrollView} from '@react-navigation/drawer';
import React from 'react';
import {View} from 'react-native';

const DrawerScreen = props => {
  return (
    <DrawerContentScrollView {...props}>
      <View></View>
    </DrawerContentScrollView>
  );
};

export default DrawerScreen;
