import {View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';

export default function ButtonPlay({color, focused}) {
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: focused ? '#E9A6A6' : '#454545'},
      ]}>
      <Icon name={'television-play'} style={styles.icon} />
    </View>
  );
}
