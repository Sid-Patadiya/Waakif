/* eslint-disable react-native/no-inline-styles */
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import React, {PropsWithChildren} from 'react';
import {scale} from '../constant/Scaling';
import {Color} from '../constant/Color';
import {Fonts} from '../constant/Font';
import {Icons} from '../constant/Image';

type SectionProps = PropsWithChildren<{
  name: string;
  leftImage: any;
  style: any;
  textStyle: any;
  rightImageVisible: any;
  onPress: any;
  rightImageStyle: any;
}>;

export default function TagView({
  name,
  leftImage,
  rightImageVisible = true,
  style,
  textStyle,
  onPress,
  rightImageStyle,
}: SectionProps) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
      {leftImage && (
        <Image
          source={leftImage}
          resizeMode="contain"
          style={styles.leftImageStyle}
        />
      )}
      <Text style={[styles.nameText, textStyle]}>{name}</Text>
      {rightImageVisible && (
        <Image
          source={Icons.arrowRight}
          resizeMode="contain"
          style={[styles.leftImageStyle, rightImageStyle]}
        />
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: scale(15),
  },
  nameText: {
    color: Color.black,
    fontFamily: Fonts.Medium,
    fontSize: scale(19),
    flex: 1,
    marginHorizontal: scale(10),
  },
  leftImageStyle: {height: scale(25), width: scale(25)},
});
