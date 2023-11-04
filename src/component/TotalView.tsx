import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React, {PropsWithChildren} from 'react';
import {height, scale, width} from '../constant/Scaling';
import {Color} from '../constant/Color';
import {Fonts} from '../constant/Font';

type SectionProps = PropsWithChildren<{
  title: string;
  value: any;
  bgImage: any;
}>;

export default function TotalView({title, value, bgImage}: SectionProps) {
  return (
    <ImageBackground
      source={bgImage}
      resizeMode="contain"
      style={styles.bgStyle}>
      <View style={styles.container}>
        <Text style={styles.totalText}>{title}</Text>
        <Text style={styles.value}>{value}</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bgStyle: {
    width: width / 2.1,
    height: height / 9,
  },
  container: {alignSelf: 'flex-end', margin: scale(20)},

  totalText: {
    color: Color.black,
    fontFamily: Fonts.Regular,
    fontSize: scale(13),
  },
  value: {
    color: Color.black,
    fontFamily: Fonts.Bold,
    fontSize: scale(19),
  },
});
