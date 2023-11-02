import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {PropsWithChildren} from 'react';
import {scale} from '../constant/Scaling';
import {Color} from '../constant/Color';
import {Fonts} from '../constant/Font';

type SectionProps = PropsWithChildren<{
  buttonName: string;
  onPress: any;
}>;

export default function CustomButton({buttonName, onPress}: SectionProps) {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.buttonStyle} onPress={onPress}>
        <Text style={styles.buttonName}>{buttonName}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: Color.white,
    borderTopLeftRadius: scale(20),
    borderTopRightRadius: scale(20),
  },
  buttonStyle: {
    padding: scale(15),
    margin: scale(20),
    backgroundColor: Color.themeColor,
    borderRadius: scale(7),
  },
  buttonName: {
    color: Color.white,
    fontSize: scale(16),
    fontFamily: Fonts.Medium,
    textAlign: 'center',
  },
});
