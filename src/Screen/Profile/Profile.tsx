import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HeaderView from '../../component/HeaderView';

export default function Profile(): JSX.Element {
  return (
    <HeaderView>
      <View style={styles.container}></View>
    </HeaderView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
