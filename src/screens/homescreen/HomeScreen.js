import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button, Text, View} from 'react-native';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text style={{fontFamily: 'TenorSans-Regular'}}>Home screen</Text>
      <Button title="Press" onPress={() => navigation.navigate('Detail')} />
    </View>
  );
};

export default HomeScreen;
