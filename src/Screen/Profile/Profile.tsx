import {Text, View} from 'react-native';
import React from 'react';
import HeaderView from '../../component/HeaderView';
import {styles} from './styles';

export default function Profile(): JSX.Element {
  return (
    <HeaderView>
      <View style={styles.container}></View>
    </HeaderView>
  );
}
