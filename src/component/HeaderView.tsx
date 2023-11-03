/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {PropsWithChildren} from 'react';
import {Color} from '../constant/Color';
import {height, scale, width} from '../constant/Scaling';
import {Images, Icons} from '../constant/Image';
import {Fonts} from '../constant/Font';

type SectionProps = PropsWithChildren<{}>;

export default function HeaderView({children}: SectionProps) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={Color.themeColor}
      />
      <View style={styles.headerView}>
        <View style={{flex: 1}}>
          <Image
            source={Images.whiteLogo}
            style={styles.logoImage}
            resizeMode="contain"
          />

          <View style={styles.locationContainer}>
            <Image
              source={Icons.location}
              style={styles.location}
              resizeMode="contain"
            />
            <Text style={styles.locationText}>{'Bangalore'}</Text>
          </View>
        </View>
        <View style={[styles.rowView, {flex: 0.9}]}>
          <View style={[styles.rowView, styles.coinView]}>
            <Image
              source={Icons.coin}
              style={styles.coinImage}
              resizeMode="contain"
            />
            <Text style={styles.coinText}>25</Text>
          </View>
          <TouchableOpacity onPress={() => {}}>
            <Image
              source={Icons.scan}
              style={styles.imageStyle}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Image
              source={Icons.notification}
              style={styles.imageStyle}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.childrenContainer}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.themeColor,
    flex: 1,
  },
  childrenContainer: {
    backgroundColor: Color.white_light,
    flex: 1,
    borderTopRightRadius: scale(40),
    borderTopLeftRadius: scale(40),
    paddingVertical: scale(20),
  },
  headerView: {
    padding: scale(20),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logoImage: {
    width: width / 4,
    height: height / 30,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: scale(3),
  },
  location: {
    width: scale(12),
    height: scale(12),
  },
  coinImage: {
    width: scale(20),
    height: scale(20),
  },
  locationText: {
    color: Color.white,
    fontFamily: Fonts.Light,
    fontSize: scale(13),
    letterSpacing: 0.5,
    marginLeft: scale(3),
  },
  imageStyle: {
    width: scale(25),
    height: scale(25),
  },
  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  coinView: {
    backgroundColor: Color.white_light_two,
    padding: scale(5),
    borderRadius: scale(30),
    paddingHorizontal: scale(10),
  },
  coinText: {
    color: Color.white,
    fontFamily: Fonts.Light,
    fontSize: scale(17),
    marginLeft: scale(3),
  },
});
