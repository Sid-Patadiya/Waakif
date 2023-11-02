import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {PropsWithChildren} from 'react';
import {Color} from '../constant/Color';
import {scale} from '../constant/Scaling';
import {Images} from '../constant/Image';
import {Fonts} from '../constant/Font';

type SectionProps = PropsWithChildren<{
  value: string;
  placeholder: string;
  onChangeText: any;
  searchIcon: boolean;
  InputStyle: any;
  keyboardType: string;
}>;

export default function SearchInput({
  value,
  placeholder,
  onChangeText,
  searchIcon = true,
  InputStyle,
  keyboardType,
}: SectionProps) {
  return (
    <View style={styles.container}>
      {searchIcon && (
        <Image
          source={Images.search}
          style={styles.imageStyle}
          resizeMode="contain"
        />
      )}
      <TextInput
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
        style={[styles.textInput, InputStyle]}
        placeholderTextColor={Color.gray_two}
        keyboardType={keyboardType ? keyboardType : 'default'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.white,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: scale(15),
    marginHorizontal: scale(20),
    borderRadius: scale(10),
  },
  imageStyle: {
    width: scale(20),
    height: scale(20),
  },
  textInput: {
    flex: 1,
    color: Color.black,
    fontFamily: Fonts.Regular,
    fontSize: scale(15),
    letterSpacing: 0.5,
    marginLeft: scale(10),
  },
});
