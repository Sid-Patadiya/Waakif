/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import {Image, StyleSheet, Text, View} from 'react-native';
import React, {PropsWithChildren, useState} from 'react';
import Modal from 'react-native-modal';
import {scale} from '../constant/Scaling';
import CustomButton from './CustomButton';
import {Color} from '../constant/Color';
import {Fonts} from '../constant/Font';
import SwipeButton from 'rn-swipe-button';
import {Icons} from '../constant/Image';

type SectionProps = PropsWithChildren<{
  isModalVisible: boolean;
  onRequestClose: void;
  headerImage: any;
  heading: string;
  description: string;
  descriptionTwo: string;
  swipeButton: boolean;
  onPress: any;
  buttonName: string;
  swipeStatus: boolean;
  onSwipeSuccess: any;
}>;

export default function CustomModel({
  isModalVisible,
  onRequestClose,
  headerImage,
  heading,
  description,
  descriptionTwo,
  swipeButton,
  onPress,
  buttonName,
  swipeStatus,
  onSwipeSuccess,
}: SectionProps) {
  const thumbIcon = () => {
    return (
      <View style={styles.customButton}>
        <Image
          source={Icons.swipeIcon}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
    );
  };
  return (
    <Modal isVisible={isModalVisible} onRequestClose={onRequestClose}>
      <View
        style={{
          justifyContent: 'center',
          backgroundColor: Color.white,
          borderRadius: scale(20),
          overflow: 'hidden',
          paddingTop: scale(30),
        }}>
        {headerImage && (
          <Image
            source={headerImage}
            style={styles.headerImage}
            resizeMode="contain"
          />
        )}
        <Text style={styles.headingText}>{heading}</Text>
        <Text style={styles.descriptionText}>
          {description}
          <Text style={styles.descriptionTwoText}>{descriptionTwo} </Text>
        </Text>

        {swipeButton ? (
          <View style={{alignItems: 'center', marginVertical: scale(15)}}>
            <SwipeButton
              thumbIconComponent={thumbIcon}
              disabled={swipeStatus}
              thumbIconImageSource={Icons.swipeIcon}
              thumbIconBackgroundColor="#3C57C3"
              railBorderColor={Color.themeColor}
              containerStyles={{borderRadius: 5}}
              thumbIconStyles={{borderRadius: 5, height: 55}}
              thumbIconWidth={50}
              height={50}
              width={320}
              onSwipeSuccess={onSwipeSuccess}
              title="Swipe to Unlock"
              titleStyles={{
                fontFamily: Fonts.Bold,
                color: Color.white,
              }}
              railBackgroundColor={Color.themeColor}
              railFillBackgroundColor={Color.themeColor}
              railFillBorderColor={Color.themeColor}
              thumbIconBorderColor="#3C57C3"
            />
          </View>
        ) : (
          <CustomButton buttonName={buttonName} onPress={onPress} />
        )}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    height: scale(90),
    width: scale(90),
    alignSelf: 'center',
  },
  headingText: {
    color: Color.black,
    fontFamily: Fonts.Bold,
    fontSize: scale(20),
    textAlign: 'center',
    marginTop: scale(40),
  },
  descriptionText: {
    color: Color.gray_three,
    fontFamily: Fonts.Regular,
    fontSize: scale(14),
    textAlign: 'center',
    marginTop: scale(5),
    marginBottom: scale(15),
    marginHorizontal: scale(20),
  },
  descriptionTwoText: {
    color: Color.themeColor,
    fontFamily: Fonts.Regular,
    fontSize: scale(14),
    textAlign: 'center',
    marginTop: scale(5),
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  customButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: scale(50),
    height: scale(50),
  },
});
