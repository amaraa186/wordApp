import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 2000);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(255, 160, 160, 1)',
      }}>
      <Text
        style={{
          fontSize: 40,
          fontWeight: 'bold',
          color: 'rgba(249, 248, 230, 1)',
        }}>
        IELTS WORD
      </Text>
    </View>
  );
};

export default Splash;
